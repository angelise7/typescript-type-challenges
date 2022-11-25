declare namespace Copy {
  /**
   * 复制,并做类型构造
   */
  type Copy<T extends Record<any, any>> = {
    [key in keyof T]: T[key];
  };
}
