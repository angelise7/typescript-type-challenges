declare namespace MyTupleToObject {
  // const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

  // type result = TupleToObject<typeof tuple>;
  // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  /**
   * 数组转object
   */
  type TupleToObject<T extends readonly string[]> = {
    [key in T[number]]: key;
  };
}
