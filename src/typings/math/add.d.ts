declare namespace Add {
  /**
   * 两数之和,利用了元组长度属性的特性[1,2,3]['length']来计算,乘除减等其余方法类似
   */
  type BuildArray<
    Length extends number,
    Ele = unknown,
    Arr extends unknown[] = []
  > = Arr['length'] extends Length
    ? Arr
    : BuildArray<Length, Ele, [...Arr, Ele]>;

  type Add<Num1 extends number, Num2 extends number> = [
    ...BuildArray<Num1>,
    ...BuildArray<Num2>
  ]['length'];

  //e.g.
  type res = Add<4, 5>;
}
