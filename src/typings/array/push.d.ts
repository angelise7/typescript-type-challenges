// type Result = Push<[1, 2], '3'>; // [1, 2, '3']

declare namespace Push {
  /**
   * 同Array.push()
   */
  type Push<T extends any[], A> = T extends [...infer F] ? [...F, A] : never;

  //e.g.
  type Result = Push<[1, 2], '3'>;
}
