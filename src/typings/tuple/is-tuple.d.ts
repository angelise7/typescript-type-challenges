declare namespace IsTuple {
  /**
   * 判断是否是元组数据.重点理解
   *  type res = [1, 2, 3]['length']; //3   type res1 = number[]['length']; //number
   */
  type IsTuple<T> = T extends [...params: infer Eles]
    ? NotEqual<Eles['length'], number>
    : false;

  /**
   * 判断类型是否不相等,根据isEqual的变形而来
   */
  type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
    T
  >() => T extends B ? 1 : 2
    ? false
    : true;
}
