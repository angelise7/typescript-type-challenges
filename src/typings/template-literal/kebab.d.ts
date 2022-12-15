declare namespace MyKebab {
  // type A = {
  //   id: number;
  //   name: string;
  //   startTime: number;
  //   endTime: number;
  //   activityProductDetail: {
  //     id: number;
  //     activityProductName: string;
  //   };
  // };

  // type _A = Kebabize<A>;

  // const a: _A = {
  //   id: number;
  //   name: string;
  //   start_time: number;
  //   end_time: number;
  //   activity_product_detail: {
  //     id: number;
  //     activity_product_name: string;
  //   };
  // };
  type Kebabize<T> = T extends any
    ? {
        [key in keyof T as KebabCaes<key & string>]: T[key] extends Record<
          string,
          any
        >
          ? Kebabize<T[key]>
          : T[key];
      }
    : never;
  //e.g.
  type A = {
    id: number;
    name: string;
    startTime: number;
    endTime: number;
    activityProductDetail: {
      id: number;
      activityProductName: string;
    };
  };

  type res = Kebabize<A>;

  /**
   * 驼峰转连字符
   * 注意 R extends Uncapitalize<R> 不写成 R extends Capitalize<R>为了防止在最后一位添加_
   */
  type KebabCaes<S extends string> = S extends `${infer L}${infer R}`
    ? R extends Uncapitalize<R>
      ? `${L}${KebabCaes<R>}`
      : `${L}_${KebabCaes<Uncapitalize<R>>}`
    : S;

  type res2 = KebabCaes<'activityProductDetail'>;
}
