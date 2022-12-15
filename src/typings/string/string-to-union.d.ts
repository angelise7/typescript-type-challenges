// type Test = '123';
// type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
declare namespace StringToUnion {
  /**
   * 字符串转联合类型
   */
  type StringToUnion<T extends string> = T extends `${infer F}${infer Rest}`
    ? F | StringToUnion<Rest>
    : never;
  //e.g.
  type Result = StringToUnion<'1234'>;
}
