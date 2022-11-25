declare namespace PartialByKeys {
  type PartialByKeys<
    T extends Record<string, any>,
    K extends keyof T
  > = Copy.Copy<Partial<Pick<T, K>> & Omit<T, K>>;

  interface User {
    name: string;
    age: number;
    address: string;
  }

  type UserPartialName = PartialByKeys<User, 'name'>;
}
