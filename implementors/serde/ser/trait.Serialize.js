(function() {var implementors = {};
implementors["tls_codec"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsVecU8.html\" title=\"struct tls_codec::TlsVecU8\">TlsVecU8</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Size.html\" title=\"trait tls_codec::Size\">Size</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["tls_codec::tls_vec::TlsVecU8"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsVecU16.html\" title=\"struct tls_codec::TlsVecU16\">TlsVecU16</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Size.html\" title=\"trait tls_codec::Size\">Size</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["tls_codec::tls_vec::TlsVecU16"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsVecU32.html\" title=\"struct tls_codec::TlsVecU32\">TlsVecU32</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Size.html\" title=\"trait tls_codec::Size\">Size</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["tls_codec::tls_vec::TlsVecU32"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsByteVecU8.html\" title=\"struct tls_codec::TlsByteVecU8\">TlsByteVecU8</a>","synthetic":false,"types":["tls_codec::tls_vec::TlsByteVecU8"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsByteVecU16.html\" title=\"struct tls_codec::TlsByteVecU16\">TlsByteVecU16</a>","synthetic":false,"types":["tls_codec::tls_vec::TlsByteVecU16"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsByteVecU32.html\" title=\"struct tls_codec::TlsByteVecU32\">TlsByteVecU32</a>","synthetic":false,"types":["tls_codec::tls_vec::TlsByteVecU32"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.SecretTlsVecU8.html\" title=\"struct tls_codec::SecretTlsVecU8\">SecretTlsVecU8</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Size.html\" title=\"trait tls_codec::Size\">Size</a> + <a class=\"trait\" href=\"https://docs.rs/zeroize/1.4.2/zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["tls_codec::tls_vec::SecretTlsVecU8"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.SecretTlsVecU16.html\" title=\"struct tls_codec::SecretTlsVecU16\">SecretTlsVecU16</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Size.html\" title=\"trait tls_codec::Size\">Size</a> + <a class=\"trait\" href=\"https://docs.rs/zeroize/1.4.2/zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["tls_codec::tls_vec::SecretTlsVecU16"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"tls_codec/struct.SecretTlsVecU32.html\" title=\"struct tls_codec::SecretTlsVecU32\">SecretTlsVecU32</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Size.html\" title=\"trait tls_codec::Size\">Size</a> + <a class=\"trait\" href=\"https://docs.rs/zeroize/1.4.2/zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["tls_codec::tls_vec::SecretTlsVecU32"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()