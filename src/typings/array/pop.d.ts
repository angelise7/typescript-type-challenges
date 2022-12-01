// type Res = Pop<['a', 'b', 'c']>;
// //expected to be ['a','b']

declare namespace Pop {
  /**
   * 同Array.pop()
   */
  type Pop<T extends unknown[]> = T extends [...infer R, unknown] ? R : never;

  //e.g.
  type Res = Pop<['a', 'b', 'c']>;
}
