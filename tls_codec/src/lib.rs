//! # TLS Codec
//!
//! This crate implements the TLS codec as defined in [RFC 8446](https://tools.ietf.org/html/rfc8446)
//! as well as some extensions required by MLS.
//!
//! With the feature `derive` `TlsSerialize` and `TlsDeserialize` can be
//! derived.
//!
//! This crate provides the following data structures that implement TLS
//! serialization/deserialization
//! * `u8`, `u16`, `u32`, `u64`
//! * `TlsVecU8`, `TlsVecU16`, `TlsVecU32`
//! * `SecretTlsVecU8`, `SecretTlsVecU16`, `SecretTlsVecU32`
//!   The same as the `TlsVec*` versions but it implements zeroize, requiring
//!   the elements to implement zeroize as well.
//! * `TlsSliceU8`, `TlsSliceU16`, `TlsSliceU32` are lightweight wrapper for slices
//!   that allow to serialize them without having to create a `TlsVec*`.
//! * `[u8; l]`, for `l ∈ [1..128]`
//! * Serialize for `Option<T>` where `T: Serialize`
//! * Deserialize for `Option<T>` where `T: Deserialize`

use std::{
    fmt::Display,
    io::{Read, Write},
};

mod arrays;
mod primitives;
mod tls_vec;
pub use tls_vec::{
    SecretTlsVecU16, SecretTlsVecU32, SecretTlsVecU8, TlsSliceU16, TlsSliceU32, TlsSliceU8,
    TlsVecU16, TlsVecU32, TlsVecU8,
};

#[cfg(feature = "derive")]
pub use tls_codec_derive::{TlsDeserialize, TlsSerialize};

/// Errors that are thrown by this crate.
#[derive(Debug, PartialEq, Clone)]
pub enum Error {
    /// An error occurred during encoding.
    EncodingError(String),

    /// The length of a vector is invalid.
    InvalidVectorLength,

    /// Error writing everything out.
    InvalidWriteLength(String),

    /// Invalid input when trying to decode a primitive integer.
    InvalidInput,

    /// An error occurred during decoding.
    DecodingError(String),

    /// Reached the end of a byte stream.
    EndOfStream,
}

impl std::error::Error for Error {}

impl Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_fmt(format_args!("{:?}", self))
    }
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
    /// Serialize `self` and write it to the `writer`.
    /// The function returns the number of bytes written to `writer`.
    fn tls_serialize<W: Write>(&self, writer: &mut W) -> Result<usize, Error>;

    /// Serialize `self` and return it as a byte vector.
    fn tls_serialize_detached(&self) -> Result<Vec<u8>, Error> {
        let mut buffer = Vec::with_capacity(self.serialized_len());
        let written = self.tls_serialize(&mut buffer)?;
        debug_assert_eq!(written, buffer.len());
        if written != buffer.len() {
            Err(Error::EncodingError(format!(
                "Expected that {} bytes were written but the output holds {} bytes",
                written,
                buffer.len()
            )))
        } else {
            Ok(buffer)
        }
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
