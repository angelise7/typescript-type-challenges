declare namespace MyLast {
  /**
   * 返回数组最后一个
   */
  type Last<T extends unknown[]> = T extends [...unknown[], infer Last]
    ? Last
    : never;
  //e.g.
  type Res = Last<['a', 'b', 'c']>;
}
