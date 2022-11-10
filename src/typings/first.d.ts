declare namespace MyFirst {
  // type arr1 = ['a', 'b', 'c']
  // type arr2 = [3, 2, 1]

  // type head1 = First<arr1> // expected to be 'a'
  // type head2 = First<arr2> // expected to be 3

  /**
   * 返回数组第一个元素
   * infer 从当前条件内推断中类型可以减少对索引的依赖
   */
  type First<T extends any[]> = T extends [infer first, ...any[]]
    ? first
    : never;
  // type First<T extends any[]> = T extends [T[0], ...any[]] ? T[0] : never;
}
