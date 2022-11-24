declare namespace PartialByKeys {
  // interface User {
  //   name: string;
  //   age: number;
  //   address: string;
  // }

  // type UserPartialName = PartialByKeys<User, 'name'>; // { name?:string; age:number; address:string }

  type Copy<T extends Record<string, any>> = {
    [key in keyof T]: T[key];
  };

  type PartialByKeys<T extends Record<string, any>, K extends keyof T> = Copy<
    Partial<Pick<T, K>> & Omit<T, K>
  >;
}
