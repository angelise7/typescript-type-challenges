// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

declare namespace Unshift {
  /**
   * 同Array.unshift
   */
  type Unshift<T extends any[], U> = T extends [...infer P] ? [U, ...P] : never;

  //e.g.
  type Result = Unshift<[1, 2], 0>;
}
