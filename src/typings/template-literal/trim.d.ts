declare namespace MyTrim {
  /**
   * 去掉字符右边空格
   */
  type TrimRight<T extends string> = T extends `${infer R}${' ' | '\n' | '\t'}`
    ? TrimRight<R>
    : T;

  /**
   * 去掉字符串左边空格
   */
  type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer R}`
    ? TrimLeft<R>
    : T;

  /**
   * 去除字符串前后空格
   */
  type Trim<T extends string> = TrimLeft<TrimRight<T>>;

  type Res = Trim<'  Hello World  '>; // expected to be 'Hello World'
}
