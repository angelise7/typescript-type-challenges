declare namespace MyStartsWith {
  /**
   * 判断字符串是否以某个前缀开头
   */
  type StartsWith<
    T extends string,
    K extends string
  > = T extends `${K}${string}` ? true : false;

  type Res = StartsWith<'abc', 'abcd'>; // expected to be false
}
