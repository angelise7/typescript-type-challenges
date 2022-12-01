//Type Res= First<['a', 'b', 'c']>;
// expected to be "a"

declare namespace First {
  /**
   * 返回数组第一个元素
   * infer 从当前条件内推断中类型可以减少对索引的依赖
   */
  type First<T extends unknown[]> = T extends [infer first, ...unknown[]]
    ? first
    : never;

  //e.g.
  type Res = First<['a', 'b', 'c']>;
}
