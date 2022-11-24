declare namespace MyKebab {
  type Kebab<T> = T extends any
    ? {
        [key in keyof T as KebabCaes<key & string>]: T[key] extends Record<
          string,
          any
        >
          ? Kebab<T[key]>
          : T[key];
      }
    : never;

  /**
   * 驼峰转连字符
   * 注意 R extends Uncapitalize<R> 不写成 R extends Capitalize<R>为了防止在最后一位添加_
   */
  type KebabCaes<S extends string> = S extends `${infer L}${infer R}`
    ? R extends Uncapitalize<R>
      ? `${L}${KebabCaes<R>}`
      : `${L}_${KebabCaes<Uncapitalize<R>>}`
    : S;
}
