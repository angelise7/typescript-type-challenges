declare namespace MyCamel {
  // type A = {
  //   id: number;
  //   name: string;
  //   start_time: number;
  //   end_time: number;
  //   activity_product_detail: {
  //     id: number;
  //     activity_product_name: string;
  //   };
  // };

  // type _A = MyCamel.Camel<A>;

  // const a: _A = {
  //   id: 1,
  //   name: 'string',
  //   startTime: 1244,
  //   endTime: 1233,
  //   activityProductDetail: {
  //     id: 2,
  //     activityProductName: '1121',
  //   },
  // };
  type Camel<T> = T extends any
    ? {
        [key in keyof T as CamelCaes<key & string>]: T[key] extends Record<
          string,
          any
        >
          ? Camel<T[key]>
          : T[key];
      }
    : never;

  type CamelCaes<S extends string> = S extends `${infer L}_${infer R}`
    ? `${L}${CamelCaes<Capitalize<R>>}`
    : S;
}
