// type Res = Last<['a', 'b', 'c']>;
// // expected to be 'c'

declare namespace Last {
  /**
   * 返回数组最后一个
   */
  type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : never;
  //e.g.
  type Res = Last<['a', 'b', 'c']>;
}
