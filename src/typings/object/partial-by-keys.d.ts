declare namespace PartialByKeys {
  /**
   * 部分属性变为可选
   */
  type PartialByKeys<T, K extends keyof T> = Copy.Copy<
    Partial<Pick<T, K>> & Omit<T, K>
  >;

  //e.g.
  interface User {
    name: string;
    age: number;
    address: string;
  }

  type UserPartialName = PartialByKeys<User, 'name'>;
}
