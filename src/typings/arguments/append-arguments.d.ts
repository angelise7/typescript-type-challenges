// type Fn = (a: number, b: string) => number;
// type Result = AppendArgument<Fn, boolean>;
// // expected be (a: number, b: string, x: boolean) => number

declare namespace AppendAgruments {
  type Fn = (a: number, b: string) => number;

  /**
   * 接受两个参数,F函数类型和A任何类型,构造一个新的函数类型G,参数为F函数的原参数类型,并将A类型作为函数G的最后一个参数,返回值与F函数相同
   *
   * **注意新构造的函数G的返回类型为ReturnType<Fun>
   */
  type AppendArgument<Fun extends (...args: any[]) => any, A> = Fun extends (
    ...args: infer P
  ) => any
    ? (...args: [...P, A]) => ReturnType<Fun>
    : never;

  //e.g.
  type Result = AppendArgument<Fn, boolean>;
}
