// interface User {
//   name?: string;
//   age?: number;
//   address?: string;
// }

// type UserRequiredName = RequiredByKeys<User, 'name'>; // { name: string; age?: number; address?: string }
declare namespace RequiredByKeys {
  /**
   * 部分属性变为必选
   */
  type RequiredByKeys<T, K extends keyof T> = Copy.Copy<
    Required<Pick<T, K>> & Omit<T, K>
  >;

  //e.g.
  interface User {
    name?: string;
    age?: number;
    address?: string;
  }
  type UserRequiredName = RequiredByKeys<User, 'name' | 'age'>;
  // { name: string; age: number; address?: string }
}
