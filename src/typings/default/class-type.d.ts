declare namespace ClassType {
  /**
   * 提取构造函数的参数类型
   */
  type ConstructorParameters<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: infer P) => any ? P : never;
  //e.g.
  type ClassConstructorParameters = ConstructorParameters<ErrorConstructor>;

  /**
   * 提取构造函数的返回类型
   */
  type InstanceType<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: any) => infer R ? R : never;
  //e.g.
  interface PersonConftructor {
    new (name: string): number;
  }
  type ClassInstanceType = InstanceType<PersonConftructor>;
}
