declare namespace MyStartsWith {
  // type a = StartsWith<'abc', 'ac'>; // expected to be false
  // type b = StartsWith<'abc', 'ab'>; // expected to be true
  // type c = StartsWith<'abc', 'abcd'>; // expected to be false

  /**
   * 判断字符串是否以某个前缀开头
   */
  type StartsWith<
    T extends string,
    K extends string
  > = T extends `${K}${string}` ? true : false;
}
