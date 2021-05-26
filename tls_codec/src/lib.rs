//! # TLS Codec
//!
//! This crate implements the TLS codec as defined in [RFC 8446](https://tools.ietf.org/html/rfc8446)
//! as well as some extensions required by MLS.
//!
//! With the feature `derive` `TlsSerialize` and `TlsDeserialize` can be
//! derived.
//!
//! This crate provides the following data structures that implement TLS
//! serialization
//! * `u8`, `u16`, `u32`, `u64`
//! * `TlsVecU8`, `TlsVecU16`, `TlsVecU32`
//! * `[u8; 2]`, `[u8; 4]`, `[u8; 8]`, `[u8; 16]`, `[u8; 32]`, `[u8; 64]`

use std::io::Read;

mod arrays;
mod primitives;
mod tls_vec;
pub use tls_vec::{TlsVecU16, TlsVecU32, TlsVecU8};

#[cfg(feature = "derive")]
pub use tls_codec_derive::{TlsDeserialize, TlsSerialize};

/// Errors that are thrown by this crate.
#[derive(Debug, PartialEq, Clone)]
pub enum Error {
    /// An error occurred during encoding.
    EncodingError,

    /// The length of a vector is invalid.
    InvalidVectorLength,

    /// Invalid input when trying to decode a primitive integer.
    InvalidInput,

    /// An error occurred during decoding.
    DecodingError(String),

    /// Reached the end of a byte stream.
    EndOfStream,
}

impl From<std::io::Error> for Error {
    fn from(e: std::io::Error) -> Self {
        match e.kind() {
            std::io::ErrorKind::UnexpectedEof => Self::EndOfStream,
            _ => Self::DecodingError(format!("io error: {:?}", e)),
        }
    }
}

/// The `TlsSize` trait needs to be implemented by any struct that should be
/// efficiently serialized.
/// This allows to collect the length of a serialized structure before allocating
/// memory.
pub trait TlsSize {
    fn serialized_len(&self) -> usize;
}

/// The `Serialize` trait provides functions to serialize a struct or enum.
///
/// The trait provides two functions:
/// * `tls_serialize` that takes a buffer to write the serialization to
/// * `tls_serialize_detached` that returns a byte vector
pub trait Serialize: TlsSize {
    fn tls_serialize(&self, buffer: &mut Vec<u8>) -> Result<(), Error>;

    fn tls_serialize_detached(&self) -> Result<Vec<u8>, Error> {
        let mut buffer = Vec::with_capacity(self.serialized_len());
        self.tls_serialize(&mut buffer)?;
        Ok(buffer)
    }
}

/// The `Deserialize` trait provides functions to deserialize a byte slice to a
/// struct or enum.
///
/// The trait provides one function:
/// * `tls_deserialize` takes a [`std::io::Read`] to read from.
///                     This will usually be a byte slice.
pub trait Deserialize {
    fn tls_deserialize<R: Read>(bytes: &mut R) -> Result<Self, Error>
    where
        Self: Sized;
}
