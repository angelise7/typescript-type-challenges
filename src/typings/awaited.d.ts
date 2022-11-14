declare namespace MyAwaited {
  // type ExampleType = Promise<string>
  // type Result = MyAwaited<ExampleType> // string

  // type ExampleType = Promise<Promise<string>>
  // type Result = MyAwaited<ExampleType> // string

  /**
   * 获取promsie内的返回值(支持循环嵌套)
   */
  type Awaited<T extends Promise<any>> = T extends Promise<infer U>
    ? U extends Promise<any>
      ? Awaited<U>
      : U
    : never;
}
