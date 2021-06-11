(function() {var implementors = {};
implementors["tls_codec"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"tls_codec/trait.TlsSize.html\" title=\"trait tls_codec::TlsSize\">TlsSize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsVecU8.html\" title=\"struct tls_codec::TlsVecU8\">TlsVecU8</a>&lt;T&gt;","synthetic":false,"types":["tls_codec::tls_vec::TlsVecU8"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"tls_codec/trait.TlsSize.html\" title=\"trait tls_codec::TlsSize\">TlsSize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsVecU16.html\" title=\"struct tls_codec::TlsVecU16\">TlsVecU16</a>&lt;T&gt;","synthetic":false,"types":["tls_codec::tls_vec::TlsVecU16"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"tls_codec/trait.TlsSize.html\" title=\"trait tls_codec::TlsSize\">TlsSize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tls_codec/struct.TlsVecU32.html\" title=\"struct tls_codec::TlsVecU32\">TlsVecU32</a>&lt;T&gt;","synthetic":false,"types":["tls_codec::tls_vec::TlsVecU32"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"tls_codec/trait.TlsSize.html\" title=\"trait tls_codec::TlsSize\">TlsSize</a> + <a class=\"trait\" href=\"https://docs.rs/zeroize/1.3.0/zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tls_codec/struct.SecretTlsVecU8.html\" title=\"struct tls_codec::SecretTlsVecU8\">SecretTlsVecU8</a>&lt;T&gt;","synthetic":false,"types":["tls_codec::tls_vec::SecretTlsVecU8"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"tls_codec/trait.TlsSize.html\" title=\"trait tls_codec::TlsSize\">TlsSize</a> + <a class=\"trait\" href=\"https://docs.rs/zeroize/1.3.0/zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tls_codec/struct.SecretTlsVecU16.html\" title=\"struct tls_codec::SecretTlsVecU16\">SecretTlsVecU16</a>&lt;T&gt;","synthetic":false,"types":["tls_codec::tls_vec::SecretTlsVecU16"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tls_codec/trait.Serialize.html\" title=\"trait tls_codec::Serialize\">Serialize</a> + <a class=\"trait\" href=\"tls_codec/trait.Deserialize.html\" title=\"trait tls_codec::Deserialize\">Deserialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"tls_codec/trait.TlsSize.html\" title=\"trait tls_codec::TlsSize\">TlsSize</a> + <a class=\"trait\" href=\"https://docs.rs/zeroize/1.3.0/zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tls_codec/struct.SecretTlsVecU32.html\" title=\"struct tls_codec::SecretTlsVecU32\">SecretTlsVecU32</a>&lt;T&gt;","synthetic":false,"types":["tls_codec::tls_vec::SecretTlsVecU32"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()