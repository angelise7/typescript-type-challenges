declare namespace MyCamel {
  /**
   * 连字符转驼峰(支持多个连字符)start_time=>startTime
   * 1. 首先约束入参S为字符串
   * 2. S extends `${infer L}_${infer R}` 通过匹配来分割_分隔符的两部分,提取第一个单词不变,剩余部分首字母大写
   * 3.如果是只有两个单词则可直接结束,单考虑到多个单词的特性,这里需要对剩余部分进行递归循环CamelCaes<Capitalize<Rest>>
   */
  type CamelCaes<S extends string> = S extends `${infer First}_${infer Rest}`
    ? `${First}${CamelCaes<Capitalize<Rest>>}`
    : S;

  //e.g.
  type B = CamelCaes<'activity_product_detail'>;

  /**
   * 将对象或数组内的属性从连字符转换为驼峰
   * 1. 开头的 T extends any ?:是为了触发类型计算,直接再定义类型时就可以显示结果,不影响实际结果
   * 2. T as CamelCaes<key & string> 用来对 Key 进行重映射 将K值改写为驼峰
   * 3. 而 Value值 进行了 条件类型判断并进行递归处理
   */
  type Camelize<T> = T extends any
    ? {
        [key in keyof T as CamelCaes<key & string>]: T[key] extends Record<
          string,
          any
        >
          ? Camelize<T[key]>
          : T[key];
      }
    : never;

  // e.p.
  type A = {
    1: number;
    id: number;
    name: string;
    start_time: number;
    end_time: number;
    activity_product_detail: {
      id: number;
      activity_product_name: string;
    };
  };
  type _A = Camelize<A>;
}
