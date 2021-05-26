//! Implement the TLS codec for some byte arrays.

use super::{Deserialize, Error, Serialize, TlsSize};
use std::io::Read;

macro_rules! impl_array {
    ($len:literal) => {
        impl Serialize for [u8; $len] {
            fn tls_serialize(&self, buffer: &mut Vec<u8>) -> Result<(), Error> {
                buffer.extend_from_slice(self);
                Ok(())
            }
        }

        impl Deserialize for [u8; $len] {
            fn tls_deserialize<R: Read>(bytes: &mut R) -> Result<Self, Error> {
                let mut out = [0u8; $len];
                bytes.read_exact(&mut out)?;
                Ok(out)
            }
        }

        impl TlsSize for [u8; $len] {
            #[inline]
            fn serialized_len(&self) -> usize {
                $len
            }
        }
    };
}

impl_array!(2);
impl_array!(4);
impl_array!(8);
impl_array!(16);
impl_array!(32);
impl_array!(64);
