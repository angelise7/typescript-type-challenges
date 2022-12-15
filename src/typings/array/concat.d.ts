// type Res = Concat<[1], [2]>; // expected to be [1, 2]
// //expected to be [1, 2]

declare namespace Concat {
  /**
   * 同Array.concat()
   */
  type Concat<T extends any[], U extends any[]> = [...T, ...U];

  //e.g.
  type Res = Concat<[1], [2]>; // expected to be [1, 2]
}
