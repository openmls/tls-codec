//! A vector with a length field for TLS serialisation.
//! Use this for any vector that is serialised.

use std::{
    convert::TryInto,
    io::{Read, Write},
    ops::Drop,
};

#[cfg(feature = "serde_serialize")]
use serde::ser::SerializeStruct;
use zeroize::Zeroize;

use crate::{Deserialize, Error, Serialize, TlsSize};

macro_rules! impl_tls_vec {
    ($size:ty, $name:ident, $len_len: literal, $($bounds: ident),*) => {
        #[derive(PartialEq, Eq, Clone, Debug)]
        pub struct $name<T: $($bounds + )*> {
            vec: Vec<T>,
        }

        impl<T: $($bounds + )*> $name<T> {
            /// Create a new `TlsVec` from a Rust Vec.
            pub fn new(vec: Vec<T>) -> Self {
                Self { vec }
            }

            /// Create a new `TlsVec` from a slice.
            pub fn from_slice(slice: &[T]) -> Self {
                Self {
                    vec: slice.to_vec(),
                }
            }

            /// Get the length of the vector.
            pub fn len(&self) -> usize {
                self.vec.len()
            }

            /// Get a slice to the raw vector.
            pub fn as_slice(&self) -> &[T] {
                &self.vec
            }

            /// Get a copy of the underlying vector.
            pub fn to_vec(&self) -> Vec<T> {
                self.vec.clone()
            }

            /// Add an element to this.
            pub fn push(&mut self, value: T) {
                self.vec.push(value);
            }

            /// Remove the last element.
            pub fn pop(&mut self) -> Option<T> {
                self.vec.pop()
            }

            /// Get the number of bytes used for the length encoding.
            #[inline(always)]
            pub fn len_len() -> usize {
                $len_len
            }
        }

        impl<T: $($bounds + )*> From<Vec<T>>
            for $name<T>
        {
            fn from(v: Vec<T>) -> Self {
                Self::new(v)
            }
        }

        impl<T: $($bounds + )*> From<&[T]>
            for $name<T>
        {
            fn from(v: &[T]) -> Self {
                Self::from_slice(v)
            }
        }

        impl<T: $($bounds + )*> From<$name<T>>
            for Vec<T>
        {
            fn from(mut v: $name<T>) -> Self {
                std::mem::take(&mut v.vec)
            }
        }

        impl<T: $($bounds + )*> Default
            for $name<T>
        {
            fn default() -> Self {
                Self { vec: Vec::new() }
            }
        }

        #[cfg(feature = "serde_serialize")]
        impl<T> serde::Serialize for $name<T>
        where
            T: $($bounds + )* serde::Serialize,
        {
            fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
            where
                S: serde::Serializer,
            {
                let mut state = serializer.serialize_struct(stringify!($name), 1)?;
                state.serialize_field("vec", &self.vec)?;
                state.end()
            }
        }

        #[cfg(feature = "serde_serialize")]
        impl<'de, T> serde::de::Deserialize<'de> for $name<T>
        where
            T: Serialize
                + Deserialize
                + Clone
                + PartialEq
                + TlsSize
                + $($bounds + )*
                serde::de::Deserialize<'de>,
        {
            fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
            where
                D: serde::de::Deserializer<'de>,
            {
                enum Field {
                    Vec,
                }

                impl<'de> serde::de::Deserialize<'de> for Field {
                    fn deserialize<D>(deserializer: D) -> Result<Field, D::Error>
                    where
                        D: serde::de::Deserializer<'de>,
                    {
                        struct FieldVisitor;

                        impl<'de> serde::de::Visitor<'de> for FieldVisitor {
                            type Value = Field;

                            fn expecting(
                                &self,
                                formatter: &mut std::fmt::Formatter,
                            ) -> std::fmt::Result {
                                formatter.write_str("`vec`")
                            }

                            fn visit_str<E>(self, value: &str) -> Result<Field, E>
                            where
                                E: serde::de::Error,
                            {
                                match value {
                                    "vec" => Ok(Field::Vec),
                                    _ => Err(serde::de::Error::unknown_field(value, &["vec"])),
                                }
                            }
                        }

                        deserializer.deserialize_identifier(FieldVisitor)
                    }
                }

                struct TlsVecVisitor<T> {
                    data: std::marker::PhantomData<T>,
                }

                impl<'de, T> serde::de::Visitor<'de> for TlsVecVisitor<T>
                where
                    T: Serialize
                        + Deserialize
                        + Clone
                        + PartialEq
                        + TlsSize
                        + $($bounds + )*
                        serde::de::Deserialize<'de>,
                {
                    type Value = $name<T>;
                    fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
                        formatter.write_fmt(format_args!("struct {}<T>", stringify!($name)))
                    }
                    fn visit_seq<V>(self, mut seq: V) -> Result<$name<T>, V::Error>
                    where
                        V: serde::de::SeqAccess<'de>,
                    {
                        let vec = seq
                            .next_element()?
                            .ok_or_else(|| serde::de::Error::invalid_length(0, &self))?;
                        Ok($name::<T>::new(vec))
                    }
                    fn visit_map<V>(self, mut map: V) -> Result<$name<T>, V::Error>
                    where
                        V: serde::de::MapAccess<'de>,
                    {
                        let mut vec = None;
                        while let Some(key) = map.next_key()? {
                            match key {
                                Field::Vec => {
                                    if vec.is_some() {
                                        return Err(serde::de::Error::duplicate_field("vec"));
                                    }
                                    vec = Some(map.next_value()?);
                                }
                            }
                        }
                        let vec = vec.ok_or_else(|| serde::de::Error::missing_field("vec"))?;
                        Ok($name::<T>::new(vec))
                    }
                }
                deserializer.deserialize_struct(
                    stringify!($name),
                    &["vec"],
                    TlsVecVisitor {
                        data: std::marker::PhantomData,
                    },
                )
            }
        }

        impl<T: $($bounds + )*> Serialize
            for $name<T>
        {
            fn tls_serialize<W: Write>(&self, writer: &mut W) -> Result<(), Error> {
                let len = self.vec.len();
                if len > (<$size>::MAX as usize) {
                    return Err(Error::InvalidVectorLength);
                }
                (self.vec.len() as $size).tls_serialize(writer)?;
                for e in self.vec.iter() {
                    e.tls_serialize(writer)?;
                }
                Ok(())
            }
        }

        impl<T: $($bounds + )*> Deserialize
            for $name<T>
        {
            fn tls_deserialize<R: Read>(bytes: &mut R) -> Result<Self, Error> {
                let mut result = Self { vec: Vec::new() };
                let len = <$size>::tls_deserialize(bytes)?;
                let mut sub = bytes.take(len.try_into()?);
                loop {
                    // XXX: check if this is efficient enough for things like u8
                    let element = T::tls_deserialize(&mut sub);
                    let element = match element {
                        Ok(e) => e,
                        Err(e) => {
                            if e == Error::EndOfStream {
                                break;
                            } else {
                                return Err(e);
                            }
                        }
                    };
                    result.push(element);
                }
                Ok(result)
            }
        }

        impl<T: $($bounds + )*> TlsSize
            for $name<T>
        {
            #[inline]
            fn serialized_len(&self) -> usize {
                self.vec
                    .iter()
                    .fold($len_len, |acc, e| acc + e.serialized_len())
            }
        }
    };
}

macro_rules! impl_secret_tls_vec {
    ($size:ty, $name:ident, $len_len: literal) => {
        impl_tls_vec!(
            $size,
            $name,
            $len_len,
            Serialize,
            Deserialize,
            Clone,
            PartialEq,
            TlsSize,
            Zeroize
        );

        impl<T: Serialize + Deserialize + Clone + PartialEq + TlsSize + Zeroize> Zeroize
            for $name<T>
        {
            fn zeroize(&mut self) {
                self.vec.zeroize()
            }
        }

        impl<T: Serialize + Deserialize + Clone + PartialEq + TlsSize + Zeroize> Drop for $name<T> {
            fn drop(&mut self) {
                self.zeroize()
            }
        }
    };
}

macro_rules! impl_public_tls_vec {
    ($size:ty, $name:ident, $len_len: literal) => {
        impl_tls_vec!(
            $size,
            $name,
            $len_len,
            Serialize,
            Deserialize,
            Clone,
            PartialEq,
            TlsSize
        );
    };
}

impl_public_tls_vec!(u8, TlsVecU8, 1);
impl_public_tls_vec!(u16, TlsVecU16, 2);
impl_public_tls_vec!(u32, TlsVecU32, 4);

// Secrets should be put into these Secret tls vectors as they implement zeroize.
impl_secret_tls_vec!(u8, SecretTlsVecU8, 1);
impl_secret_tls_vec!(u16, SecretTlsVecU16, 2);
impl_secret_tls_vec!(u32, SecretTlsVecU32, 4);

// TODO: impl_tls_vec!(u64, TlsVecU64);

impl From<std::num::TryFromIntError> for Error {
    fn from(_e: std::num::TryFromIntError) -> Self {
        Self::InvalidVectorLength
    }
}

impl From<std::convert::Infallible> for Error {
    fn from(_e: std::convert::Infallible) -> Self {
        Self::InvalidVectorLength
    }
}
