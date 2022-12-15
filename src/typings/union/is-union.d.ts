declare namespace IsUnion {
  /**
   * 判断是否是联合类型,重点理解 A exnteds A 和 [A] extends [A]的区别
   */
  type IsUnion<A, B = A> = A extends A
    ? [B] extends [A]
      ? false
      : true
    : never;

  type res = IsUnion<1 | 2>;
  type res1 = IsUnion<1>;
}
