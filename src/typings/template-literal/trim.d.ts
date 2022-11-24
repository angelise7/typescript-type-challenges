declare namespace MyTrim {
  // type trimmed = Trim<'  Hello World  '>; // expected to be 'Hello World'

  type TrimRight<T extends string> = T extends `${infer R}${' ' | '\n' | '\t'}`
    ? TrimRight<R>
    : T;

  type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer R}`
    ? TrimLeft<R>
    : T;

  /**
   * 去除字符串前后空格
   */
  type Trim<T extends string> = TrimLeft<TrimRight<T>>;
}
