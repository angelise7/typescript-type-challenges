declare namespace PromiseType {
  /**
   * 获取Promise的返回值,支持嵌套
   * 1.如果 T 是 null 或者 undefined，就返回 T
   * 2.如果 T 是对象并且有 then 方法，那就提取 then 的参数，也就是 onfulfilled 函数的类型到 infer 声明的局部变量 F
   * 3.继续提取 onfullfilled 函数类型的第一个参数的类型，也就是 Promise 返回的值的类型到 infer 声明的局部变量 V。 递归的处理提取出来的 V，直到不再满足上面的条件
   */
  type Awaited<T> = T extends null | undefined
    ? T
    : T extends object & { then(onfulfilled: infer F): any }
    ? F extends (value: infer V, ...args: any) => any
      ? Awaited<V>
      : never
    : T;

  //e.g.
  type PromiseAwaited = Awaited<boolean | Promise<number>>;

  /**
   * 判断是否为null或undefined
   */
  type NonNullable<T> = T extends null | undefined ? true : false;
}
