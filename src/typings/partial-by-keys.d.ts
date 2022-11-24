declare namespace PartialByKeys {
  // interface User {
  //   name: string;
  //   age: number;
  //   address: string;
  // }

  // type UserPartialName = PartialByKeys<User, 'name'>; // { name?:string; age:number; address:string }
  type PartialByKeys<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
}
