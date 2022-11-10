declare namespace MyPick {
  /**
   * Pick同名工具
   */
  type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
  };
}
