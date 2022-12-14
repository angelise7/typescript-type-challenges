declare namespace MapTypes {
  /**
   * 将对象内某类型属性转换为指定类型
   */
  type MapTypes<T, R extends { mapFrom: unknown; mapTo: unknown }> = {
    [key in keyof T]: T[key] extends R['mapFrom'] ? R['mapTo'] : T[key];
  };
  // : never;
  //e.g.
  type StringToNumber = {
    mapFrom: string;
    mapTo: number;
  };
  type StringToDate = {
    mapFrom: string;
    mapTo: Date;
  };

  type res = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>;
  type res1 = MapTypes<
    { iWillBeNumberOrDate: string },
    StringToDate | StringToNumber
  >;
  type res2 = MapTypes<
    { iWillBeANumberOneDay: string; iWillStayTheSame: Function },
    StringToNumber
  >;
}
