declare namespace UnionType {
  /**
   * 从联合类型中排除一部分类型,构造类型
   */
  type Exclude<T, U> = T extends U ? never : T;
  //e.g.
  type UnionExclude = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'b'>;

  /**
   * 从两个联合类型中取交集,构造类型
   */
  type Extract<T, U> = T extends U ? T : never;
  //e.g.
  type UnionExtract = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'b'>;
}
