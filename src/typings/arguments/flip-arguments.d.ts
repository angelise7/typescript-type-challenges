// type Flipped = FlipArguments<
//   (arg0: string, arg1: number, arg2: boolean) => void
// >;
// //expected to be  (arg0: boolean, arg1: number, arg2: string) => void

declare namespace FilpArguments {
  /**
   *  翻转函数参数
   */
  type FlipArguments<F extends (...args: any[]) => any> = F extends (
    ...args: infer Arg
  ) => any
    ? (...args: Reverse<Arg>) => ReturnType<F>
    : never;

  /**
   * 翻转数组
   */
  type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
    ? [...Reverse<Rest>, First]
    : [];

  //e.g.
  type Flipped = FlipArguments<
    (arg0: string, arg1: number, arg2: boolean) => number
  >;
}
