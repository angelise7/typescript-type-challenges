declare namespace MyExclude {
  // type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c';

  /**
   * 去除T类型内的U类型
   * 联合类型extends时先分别取每一个值
   */
  type Exclude<T, U> = T extends U ? never : T;
}
