var searchIndex = JSON.parse('{\
"tls_codec":{"doc":"TLS Codec","t":[12,12,12,13,8,13,13,4,13,13,13,3,3,3,8,24,24,8,3,3,3,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["0","0","0","DecodingError","Deserialize","EncodingError","EndOfStream","Error","InvalidInput","InvalidVectorLength","InvalidWriteLength","SecretTlsVecU16","SecretTlsVecU32","SecretTlsVecU8","Serialize","TlsDeserialize","TlsSerialize","TlsSize","TlsSliceU16","TlsSliceU32","TlsSliceU8","TlsVecU16","TlsVecU32","TlsVecU8","as_slice","as_slice","as_slice","as_slice","as_slice","as_slice","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","default","default","default","default","default","default","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","drop","drop","drop","eq","eq","eq","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_iter","from_iter","from_iter","from_iter","from_iter","from_iter","from_slice","from_slice","from_slice","from_slice","from_slice","from_slice","get","get","get","get","get","get","hash","hash","hash","hash","hash","hash","index","index","index","index","index","index","index_mut","index_mut","index_mut","index_mut","index_mut","index_mut","into","into","into","into","into","into","into","into","into","into","into_vec","into_vec","into_vec","into_vec","into_vec","into_vec","is_empty","is_empty","is_empty","is_empty","is_empty","is_empty","iter","iter","iter","iter","iter","iter","len","len","len","len","len","len","len_len","len_len","len_len","len_len","len_len","len_len","ne","new","new","new","new","new","new","pop","pop","pop","pop","pop","pop","push","push","push","push","push","push","retain","retain","retain","retain","retain","retain","serialize","serialize","serialize","serialize","serialize","serialize","serialized_len","serialized_len","serialized_len","serialized_len","serialized_len","serialized_len","serialized_len","serialized_len","serialized_len","serialized_len","tls_deserialize","tls_deserialize","tls_deserialize","tls_deserialize","tls_deserialize","tls_deserialize","tls_deserialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize","tls_serialize_detached","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_vec","to_vec","to_vec","to_vec","to_vec","to_vec","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","zeroize","zeroize","zeroize"],"q":["tls_codec","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","An error occurred during decoding.","The <code>Deserialize</code> trait provides functions to deserialize a …","An error occurred during encoding.","Reached the end of a byte stream.","Errors that are thrown by this crate.","Invalid input when trying to decode a primitive integer.","The length of a vector is invalid.","Error writing everything out.","","","","The <code>Serialize</code> trait provides functions to serialize a …","","","The <code>TlsSize</code> trait needs to be implemented by any struct …","","","","","","","Get a slice to the raw vector.","Get a slice to the raw vector.","Get a slice to the raw vector.","Get a slice to the raw vector.","Get a slice to the raw vector.","Get a slice to the raw vector.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a new <code>TlsVec</code> from a slice.","Create a new <code>TlsVec</code> from a slice.","Create a new <code>TlsVec</code> from a slice.","Create a new <code>TlsVec</code> from a slice.","Create a new <code>TlsVec</code> from a slice.","Create a new <code>TlsVec</code> from a slice.","Returns a reference to an element or subslice depending …","Returns a reference to an element or subslice depending …","Returns a reference to an element or subslice depending …","Returns a reference to an element or subslice depending …","Returns a reference to an element or subslice depending …","Returns a reference to an element or subslice depending …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Get the underlying vector and consume this.","Get the underlying vector and consume this.","Get the underlying vector and consume this.","Get the underlying vector and consume this.","Get the underlying vector and consume this.","Get the underlying vector and consume this.","Check if the vector is empty.","Check if the vector is empty.","Check if the vector is empty.","Check if the vector is empty.","Check if the vector is empty.","Check if the vector is empty.","Returns an iterator over the slice.","Returns an iterator over the slice.","Returns an iterator over the slice.","Returns an iterator over the slice.","Returns an iterator over the slice.","Returns an iterator over the slice.","Get the length of the vector.","Get the length of the vector.","Get the length of the vector.","Get the length of the vector.","Get the length of the vector.","Get the length of the vector.","Get the number of bytes used for the length encoding.","Get the number of bytes used for the length encoding.","Get the number of bytes used for the length encoding.","Get the number of bytes used for the length encoding.","Get the number of bytes used for the length encoding.","Get the number of bytes used for the length encoding.","","Create a new <code>TlsVec</code> from a Rust Vec.","Create a new <code>TlsVec</code> from a Rust Vec.","Create a new <code>TlsVec</code> from a Rust Vec.","Create a new <code>TlsVec</code> from a Rust Vec.","Create a new <code>TlsVec</code> from a Rust Vec.","Create a new <code>TlsVec</code> from a Rust Vec.","Remove the last element.","Remove the last element.","Remove the last element.","Remove the last element.","Remove the last element.","Remove the last element.","Add an element to this.","Add an element to this.","Add an element to this.","Add an element to this.","Add an element to this.","Add an element to this.","Retains only the elements specified by the predicate.","Retains only the elements specified by the predicate.","Retains only the elements specified by the predicate.","Retains only the elements specified by the predicate.","Retains only the elements specified by the predicate.","Retains only the elements specified by the predicate.","","","","","","","","","","","","","","","","","","","","","","","","Serialize <code>self</code> and write it to the <code>writer</code>. The function …","","","","","","","","","","Serialize <code>self</code> and return it as a byte vector.","","","","","","","","","Get a copy of the underlying vector.","Get a copy of the underlying vector.","Get a copy of the underlying vector.","Get a copy of the underlying vector.","Get a copy of the underlying vector.","Get a copy of the underlying vector.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,2,3,4,0,4,4,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,7,8,9,10,5,5,6,6,7,7,8,8,9,9,10,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,4,5,6,7,8,9,10,4,5,6,7,8,9,10,5,6,7,8,9,10,8,9,10,5,6,7,8,9,10,4,5,6,7,8,9,10,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,1,2,3,4,4,4,4,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,11,5,6,7,8,9,10,1,2,3,12,5,6,7,8,9,10,13,5,6,7,8,9,10,1,2,3,13,5,6,7,8,9,10,4,4,5,6,7,8,9,10,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,8,9,10],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["tlsvecu8",3]],[[],["tlsvecu16",3]],[[],["tlsvecu32",3]],[[],["secrettlsvecu8",3]],[[],["secrettlsvecu16",3]],[[],["secrettlsvecu32",3]],[[],["error",4]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[]],[[]],[[]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[["error",4]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["vec",3]]],[[]],[[["vec",3]]],[[]],[[]],[[]],[[["vec",3]]],[[["vec",3]]],[[]],[[]],[[]],[[["vec",3]]],[[]],[[]],[[["vec",3]]],[[]],[[]],[[]],[[]],[[["infallible",4]]],[[["tryfrominterror",3]]],[[["tryfromsliceerror",3]]],[[]],[[["error",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[["usize",15]],["option",4]],[[]],[[]],[[]],[[]],[[]],[[]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["iter",3]],[[],["iter",3]],[[],["iter",3]],[[],["iter",3]],[[],["iter",3]],[[],["iter",3]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[["error",4]],["bool",15]],[[["vec",3]]],[[["vec",3]]],[[["vec",3]]],[[["vec",3]]],[[["vec",3]]],[[["vec",3]]],[[],["option",4]],[[],["option",4]],[[],["option",4]],[[],["option",4]],[[],["option",4]],[[],["option",4]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],["usize",15]],[[],[["result",4],["error",4]]],[[],[["result",4],["error",4]]],[[],[["result",4],["error",4]]],[[],[["result",4],["error",4]]],[[],[["result",4],["error",4]]],[[],[["result",4],["error",4]]],[[],[["result",4],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["usize",15],["error",4]]],[[],[["result",4],["error",4],["vec",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["string",3]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["vec",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]]],"p":[[3,"TlsSliceU8"],[3,"TlsSliceU16"],[3,"TlsSliceU32"],[4,"Error"],[3,"TlsVecU8"],[3,"TlsVecU16"],[3,"TlsVecU32"],[3,"SecretTlsVecU8"],[3,"SecretTlsVecU16"],[3,"SecretTlsVecU32"],[8,"TlsSize"],[8,"Deserialize"],[8,"Serialize"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};