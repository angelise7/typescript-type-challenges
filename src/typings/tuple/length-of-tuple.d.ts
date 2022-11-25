declare namespace MyLength {
  /**
   *  获取数组长度
   */
  type Length<T extends any[]> = T['length'];

  //e.g.
  type Res = Length<['tesla', 'model 3', 'model X', 'model Y']>;
}
