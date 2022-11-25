declare namespace Fun {
  // 函数
  /**
   * 返回函数的参数类型
   */
  type Parameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
  ) => any
    ? P
    : never;

  //e.g.
  type FunctionParamsType = Parameters<(arg1: string, arg2: number) => {}>;

  /**
   * 返回函数的返回类型
   */
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : never;

  //e.g.
  type FunctionReturnType = ReturnType<() => 'string'>;

  /***************************/

  /**
   * 约束函数入参this的类型
   */
  type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
    ? U
    : unknown;

  type OmitThisParameter<T> = unknown extends ThisParameterType<T>
    ? T
    : T extends (...args: infer A) => infer R
    ? (...args: A) => R
    : T;
}
