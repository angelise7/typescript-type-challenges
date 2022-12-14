// type OmitBoolean = OmitByType<{
//   name: string
//   count: number
//   isReadonly: boolean
//   isEnable: boolean
// }, boolean> // { name: string; count: number }
declare namespace OmitByType {
  /**
   * 选择合适类型的属性
   */
  type OmitByType<T, K> = {
    [key in keyof T as T[key] extends K ? never : key]: T[key];
  };

  type OmitBoolean = OmitByType<
    {
      name: string;
      count: number;
      isReadonly: boolean;
      isEnable: boolean;
    },
    boolean
  >;
  // { name: string; count: number }
}
