// type OnlyBoolean = PickByType<
//   {
//     name: string;
//     count: number;
//     isReadonly: boolean;
//     isEnable: boolean;
//   },
//   boolean
// >; // { isReadonly: boolean; isEnable: boolean; }
declare namespace PickByType {
  /**
   * 获取对象内适配类型的属性
   */
  type PickByType<T, U> = {
    [key in keyof T as T[key] extends U ? key : never]: T[key];
  };

  type OnlyBoolean = PickByType<
    {
      name: string;
      count: number;
      isReadonly: boolean;
      isEnable: boolean;
    },
    boolean
  >;
}
