extern crate proc_macro;
extern crate proc_macro2;

use proc_macro::TokenStream;
use proc_macro2::Span;
use quote::{quote, ToTokens};
use syn::{
    self, parenthesized,
    parse::{ParseStream, Parser, Result},
    parse_macro_input, Data, DeriveInput, Fields, FieldsNamed, Ident,
};

#[proc_macro_derive(TlsSerialize)]
pub fn serialize_macro_derive(input: TokenStream) -> TokenStream {
    let ast = parse_macro_input!(input as DeriveInput);
    impl_serialize(ast).unwrap()
}

fn impl_serialize(ast: DeriveInput) -> Result<TokenStream> {
    let call_site = Span::call_site();
    let ident = &ast.ident;
    match ast.data {
        Data::Struct(st) => match st.fields {
            Fields::Named(FieldsNamed { named, .. }) => {
                let idents = named.iter().map(|f| &f.ident);
                let idents2 = idents.clone();

                let gen = quote! {
                    impl tls_codec::Serialize for #ident {
                        fn tls_serialize<W: std::io::Write>(&self, writer: &mut W) -> core::result::Result<(), tls_codec::Error> {
                            #(self.#idents.tls_serialize(writer)?;)*
                            Ok(())
                        }
                    }

                    impl tls_codec::TlsSize for #ident {
                        #[inline]
                        fn serialized_len(&self) -> usize {
                            #(self.#idents2.serialized_len() + )*
                            0
                        }
                    }
                };
                Ok(gen.into())
            }
            _ => unimplemented!(),
        },
        // Enums.
        // Note that they require a repr attribute.
        Data::Enum(syn::DataEnum { variants, .. }) => {
            let mut repr = None;
            for attr in ast.attrs {
                if attr.path.is_ident("repr") {
                    fn repr_arg(input: ParseStream) -> Result<Ident> {
                        let content;
                        parenthesized!(content in input);
                        content.parse()
                    }
                    let ty = repr_arg.parse2(attr.tokens)?;
                    repr = Some(ty);
                    break;
                }
            }
            let repr =
                repr.ok_or_else(|| syn::Error::new(call_site, "missing #[repr(...)] attribute"))?;
            let variants = variants.iter().map(|variant| {
                let variant = &variant.ident;
                quote! {
                    #ident::#variant => #ident::#variant as #repr,
                }
            });

            let gen = quote! {
                impl tls_codec::Serialize for #ident {
                    fn tls_serialize<W: std::io::Write>(&self, writer: &mut W) -> core::result::Result<(), tls_codec::Error> {
                        let enum_value: #repr = match self {
                            #(#variants)*
                        };
                        enum_value.tls_serialize(writer)
                    }
                }

                impl tls_codec::TlsSize for #ident {
                    #[inline]
                    fn serialized_len(&self) -> usize {
                        std::mem::size_of::<#repr>()
                    }
                }
            };
            Ok(gen.into())
        }
        Data::Union(_) => unimplemented!(),
    }
}

#[proc_macro_derive(TlsDeserialize)]
pub fn deserialize_macro_derive(input: TokenStream) -> TokenStream {
    let ast = parse_macro_input!(input as DeriveInput);
    impl_deserialize(ast).unwrap()
}

fn impl_deserialize(ast: DeriveInput) -> Result<TokenStream> {
    let call_site = Span::call_site();
    let ident = &ast.ident;
    match ast.data {
        Data::Struct(st) => match st.fields {
            Fields::Named(FieldsNamed { named, .. }) => {
                let idents = named.iter().map(|f| &f.ident);
                let paths = named.iter().map(|f| match f.ty.clone() {
                    syn::Type::Path(mut p) => {
                        let path = &mut p.path;
                        // Convert generic arguments in the path to const arguments.
                        path.segments.iter_mut().for_each(|mut p| {
                            if let syn::PathArguments::AngleBracketed(ab) = &mut p.arguments {
                                let mut ab = ab.clone();
                                ab.colon2_token = Some(syn::token::Colon2::default());
                                p.arguments = syn::PathArguments::AngleBracketed(ab);
                            }
                        });
                        syn::Type::Path(p).to_token_stream()
                    }
                    syn::Type::Array(a) => {
                        quote! { <#a> }
                    }
                    _ => panic!("Invalid field type for {:?}", f.ident),
                });

                let gen = quote! {
                    impl tls_codec::Deserialize for #ident {
                        fn tls_deserialize<R: std::io::Read>(bytes: &mut R) -> core::result::Result<Self, tls_codec::Error> {
                            Ok(Self {
                                #(#idents: #paths::tls_deserialize(bytes)?,)*
                            })
                        }
                    }
                };
                Ok(gen.into())
            }
            _ => unimplemented!(),
        },
        // Enums.
        // Note that they require a repr attribute.
        Data::Enum(syn::DataEnum { variants, .. }) => {
            let mut repr = None;
            for attr in ast.attrs {
                if attr.path.is_ident("repr") {
                    fn repr_arg(input: ParseStream) -> Result<Ident> {
                        let content;
                        parenthesized!(content in input);
                        content.parse()
                    }
                    let ty = repr_arg.parse2(attr.tokens)?;
                    repr = Some(ty);
                    break;
                }
            }
            let repr =
                repr.ok_or_else(|| syn::Error::new(call_site, "missing #[repr(...)] attribute"))?;

            let discriminants = variants.iter().map(|variant| {
                let variant = &variant.ident;
                quote! {
                    const #variant: #repr = #ident::#variant as #repr;
                }
            });

            let matched = variants.iter().map(|variant| {
                let variant = &variant.ident;
                quote! {
                    #variant => core::result::Result::Ok(#ident::#variant),
                }
            });

            let gen = quote! {
                impl tls_codec::Deserialize for #ident {
                    #[allow(non_upper_case_globals)]
                    fn tls_deserialize<R: std::io::Read>(bytes: &mut R) -> core::result::Result<Self, tls_codec::Error> {
                        #(#discriminants)*

                        let value = #repr::tls_deserialize(bytes)?;
                        match value {
                            #(#matched)*
                            // XXX: This assumes non-exhaustive matches only.
                            _ => Err(tls_codec::Error::DecodingError(format!("Unmatched value {:?}", value))),
                        }
                    }
                }
            };
            Ok(gen.into())
        }
        Data::Union(_) => unimplemented!(),
    }
}
