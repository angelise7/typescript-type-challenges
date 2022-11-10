declare namespace MyLength {
  // type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  // type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  // type teslaLength = Length<tesla>  // expected 4
  // type spaceXLength = Length<spaceX> // expected 5
  /**
   *  获取数组长度
   */
  type Length<T extends any[]> = T['length'];
}
