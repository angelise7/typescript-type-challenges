// type Test = TupleToUnion<['1', '2', '3']> // expected to be '1' | '2' | '3'
declare namespace TupleToUnion {
  type TupleToUnion<T extends unknown[]> = T[number];

  //e.g.
  type Res = TupleToUnion<['1', '2', '3']>;
}
