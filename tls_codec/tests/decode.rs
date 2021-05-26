use tls_codec::{Deserialize, TlsVecU8};

#[test]
fn deserialize_primitives() {
    let mut b = &[77u8, 88, 1, 99] as &[u8];

    let a = u8::tls_deserialize(&mut b).expect("Unable to tls_deserialize");
    assert_eq!(77, a);
    let a = u8::tls_deserialize(&mut b).expect("Unable to tls_deserialize");
    assert_eq!(88, a);
    let a = u16::tls_deserialize(&mut b).expect("Unable to tls_deserialize");
    assert_eq!(355, a);

    // It's empty now.
    assert!(u8::tls_deserialize(&mut b).is_err())
}

#[test]
fn deserialize_tls_vec() {
    let mut b = &[1u8, 4, 77, 88, 1, 99] as &[u8];

    let a = u8::tls_deserialize(&mut b).expect("Unable to tls_deserialize");
    assert_eq!(1, a);
    println!("b: {:?}", b);
    let v = TlsVecU8::<u8>::tls_deserialize(&mut b).expect("Unable to tls_deserialize");
    assert_eq!(&[77, 88, 1, 99], v.as_slice());

    // It's empty now.
    assert!(u8::tls_deserialize(&mut b).is_err());
}
