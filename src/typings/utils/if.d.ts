declare namespace MyIf {
  // type A = If<true, 'a', 'b'>  // expected to be 'a'
  // type B = If<false, 'a', 'b'> // expected to be 'b'

  type If<T extends true | false, C, F> = T extends true ? C : F;
}
