// type Result = Shift<[3, 2, 1]> // [2, 1]
declare namespace Shift {
  /**
   * 同Array.shift()
   */
  type Shift<T extends any[]> = T extends [unknown, ...infer Rest]
    ? Rest
    : never;

  //e.g.
  type Result = Shift<[3, 2, 1]>;
}
