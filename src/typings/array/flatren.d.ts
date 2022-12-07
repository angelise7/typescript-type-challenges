// type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
declare namespace Flatten {
  /**
   *  拉平数组
   */
  type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
    ? First extends any[]
      ? Flatten<[...First, ...Rest]>
      : [First, ...Flatten<Rest>]
    : [];

  //e.g.
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>;
}
