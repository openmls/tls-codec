//! Codec implementations for unsigned integer primitives.

use super::{Deserialize, Error, Serialize, TlsSize};

use std::io::{Read, Write};

impl<T: TlsSize> TlsSize for Option<T> {
    #[inline]
    fn serialized_len(&self) -> usize {
        1 + match self {
            Some(v) => v.serialized_len(),
            None => 0,
        }
    }
}

impl<T: Serialize> Serialize for Option<T> {
    fn tls_serialize<W: Write>(&self, writer: &mut W) -> Result<(), Error> {
        match self {
            Some(e) => {
                writer.write_all(&[1])?;
                e.tls_serialize(writer)
            }
            None => {
                writer.write_all(&[0])?;
                Ok(())
            }
        }
    }
}

impl<T: Deserialize> Deserialize for Option<T> {
    fn tls_deserialize<R: Read>(bytes: &mut R) -> Result<Self, Error> {
        let mut some_or_none = [0u8; 1];
        bytes.read_exact(&mut some_or_none)?;
        match some_or_none[0] {
            0 => {
                Ok(None)
            },
            1 => {
                let element = T::tls_deserialize(bytes)?;
                Ok(Some(element))
            },
            _ => Err(Error::DecodingError(format!("Trying to decode Option<T> with {} for option. It must be 0 for None and 1 for Some.", some_or_none[0])))
        }
    }
}

macro_rules! impl_unsigned {
    ($t:ty, $bytes:literal) => {
        impl Deserialize for $t {
            fn tls_deserialize<R: Read>(bytes: &mut R) -> Result<Self, Error> {
                let mut x = (0 as $t).to_be_bytes();
                bytes.read_exact(&mut x)?;
                Ok(<$t>::from_be_bytes(x))
            }
        }

        impl Serialize for $t {
            fn tls_serialize<W: Write>(&self, writer: &mut W) -> Result<(), Error> {
                writer.write_all(&self.to_be_bytes())?;
                Ok(())
            }
        }

        impl TlsSize for $t {
            #[inline]
            fn serialized_len(&self) -> usize {
                $bytes
            }
        }
    };
}

impl_unsigned!(u8, 1);
impl_unsigned!(u16, 2);
impl_unsigned!(u32, 4);
impl_unsigned!(u64, 8);

impl From<std::array::TryFromSliceError> for Error {
    fn from(_: std::array::TryFromSliceError) -> Self {
        Self::InvalidInput
    }
}
