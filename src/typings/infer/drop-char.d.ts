// type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
declare namespace DropChar {
  /**
   * 字符串中删除指定字符
   */
  type DropChar<
    T extends string,
    N extends string
  > = T extends `${infer K}${N}${infer Rest}` ? `${K}${DropChar<Rest, N>}` : T;

  type Res = DropChar<' b u t t e r f l y ! ', ' '>;
}
