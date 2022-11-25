declare namespace IsEqual {
  /**
   * 判断是否类型相等
   * 为什么不写成最下面的写法,是因为如果拿any和任意类型比较返回的始终是true,翻阅源码就可知要改成判断相等性来做类型判断
   */
  type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
    T
  >() => T extends B ? 1 : 2
    ? true
    : false;

  // type IsEqual<A, B> = (A extends B ? true : false) &
  //   (B extends A ? true : false);
}
