declare namespace MyReadonly {
  /**
   * Readonly同名工具
   */
  type Readonly<T> = {
    readonly [key in keyof T]: T[key];
  };
}
