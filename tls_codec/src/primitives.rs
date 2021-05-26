//! Codec implementations for unsigned integer primitives.

use super::{Deserialize, Error, Serialize, TlsSize};

use std::io::Read;

impl Serialize for u8 {
    fn tls_serialize(&self, buffer: &mut Vec<u8>) -> Result<(), Error> {
        buffer.push(*self);
        Ok(())
    }
}

impl TlsSize for u8 {
    #[inline]
    fn serialized_len(&self) -> usize {
        1
    }
}

impl Serialize for u16 {
    fn tls_serialize(&self, buffer: &mut Vec<u8>) -> Result<(), Error> {
        buffer.extend_from_slice(&self.to_be_bytes());
        Ok(())
    }
}

impl TlsSize for u16 {
    #[inline]
    fn serialized_len(&self) -> usize {
        2
    }
}

impl Serialize for u32 {
    fn tls_serialize(&self, buffer: &mut Vec<u8>) -> Result<(), Error> {
        buffer.extend_from_slice(&self.to_be_bytes());
        Ok(())
    }
}

impl TlsSize for u32 {
    #[inline]
    fn serialized_len(&self) -> usize {
        4
    }
}

impl Serialize for u64 {
    fn tls_serialize(&self, buffer: &mut Vec<u8>) -> Result<(), Error> {
        buffer.extend_from_slice(&self.to_be_bytes());
        Ok(())
    }
}

impl TlsSize for u64 {
    #[inline]
    fn serialized_len(&self) -> usize {
        8
    }
}

impl<T: TlsSize> TlsSize for Option<T> {
    #[inline]
    fn serialized_len(&self) -> usize {
        1 + match self {
            Some(v) => v.serialized_len(),
            None => 0,
        }
    }
}

macro_rules! impl_deserialize_unsigned {
    ($t:ty) => {
        impl Deserialize for $t {
            fn tls_deserialize<R: Read>(bytes: &mut R) -> Result<Self, Error> {
                let mut x = (0 as $t).to_be_bytes();
                bytes.read_exact(&mut x)?;
                Ok(<$t>::from_be_bytes(x))
            }
        }
    };
}

impl_deserialize_unsigned!(u8);
impl_deserialize_unsigned!(u16);
impl_deserialize_unsigned!(u32);
impl_deserialize_unsigned!(u64);

impl From<std::array::TryFromSliceError> for Error {
    fn from(_e: std::array::TryFromSliceError) -> Self {
        Self::InvalidInput
    }
}
