declare namespace MyIsAny {
  /**
   * 判断类型是否是any
   */
  type IsAny<T> = string extends string & T ? true : false;
}
