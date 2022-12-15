declare namespace IsNever {
  /**
   * 判断never
   */
  type IsNever<T> = T extends [never] ? true : false;
}
