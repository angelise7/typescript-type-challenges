// interface Model {
//   name: string;
//   age: number;
//   locations: string[] | null;
// }
// type modelEntries = ObjectEntries<Model>
//  // ['name', string] | ['age', number] | ['locations', string[] | null];

declare namespace ObjectEntries {
  /**
   * 同Object.entries
   *  T[K] extends undefined ? undefined : Required<T>[K] 不直接写成 Required<T>[K] 是因为下面例子中有name属性的情况,可选类型在构建后添加了undefined类型,但同时类型为undefined时,取到的结果为never
   */
  type ObjectEntries<T, K extends keyof T = keyof T> = K extends K
    ? [K, Required<T>[K]]
    : never;

  //e.g.
  interface Model {
    name?: undefined;
    age?: number;
    locations: string[] | undefined | null;
  }
  type modelEntries = ObjectEntries<Model>;
}
