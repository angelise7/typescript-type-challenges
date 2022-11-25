declare namespace If {
  /**
   * 第一个参数是true 返回第二个类型,为false返回第三个类型
   */
  type If<T extends true | false, C, F> = T extends true ? C : F;

  type Res = If<false, 'a', 'b'>; // expected to be 'b'
}
