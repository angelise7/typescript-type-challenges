declare namespace MyLast {
  // type arr1 = ['a', 'b', 'c']
  // type arr2 = [3, 2, 1]

  // type head1 = Last<arr1> // expected to be 'c'
  // type head2 = Last<arr2> // expected to be 1

  /**
   * 返回数组最后一个
   */
  type Last<T extends unknown[]> = T extends [...unknown[], infer Last]
    ? Last
    : never;
}
