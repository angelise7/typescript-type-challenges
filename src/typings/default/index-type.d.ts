declare namespace IndexType {
  /**
   * 构造一个所有属性都可选的类型
   */
  type Partial<T> = {
    [key in keyof T]?: T[key];
  };
  //e.g.
  type IndexTypePartial = Partial<{ a: number; b: string }>;

  /**
   * 构造一个所有属性都必须得类型
   */
  type Required<T> = {
    [key in keyof T]-?: T[key];
  };
  //e.g.
  type IndexTypeRequired = Required<{ a?: number; b: string }>;

  /**
   * 构造一个所有属性都是只读的类型
   */
  type Readonly<T> = {
    readonly [key in keyof T]: T[key];
  };
  //e.g.
  type IndexTypeReadonly = Readonly<{ a: number; b: string }>;

  /**
   * 构造一个对象类型,属性为K,属性值为T
   */
  type Record<K extends keyof any, T> = {
    [key in K]: T;
  };
  //e.g.
  type IndexTypeRecord = Record<string, number>;

  /**
   * 从T类型中选取属性K,构造一个类型
   */
  type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
  };
  //e.g.
  type IndexTypePick = Pick<
    {
      id: number;
      name: string;
      age: number;
    },
    'id' | 'name'
  >;

  /**
   * 从T类型中去掉K属性,构造一个类型
   *
   * 1.先从T类型中去除K属性,得到U
   * 2.从T类型中选取U类型构造新的类型
   *
   * 注意 这里K的约束:K extends keyof any 而不是 K extends keyof T 为了让入参更宽泛,可以开下面例子,BadProps会报错,因为'd'无法入参
   */
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

  //e.g.
  type BadProps = 'a' | 'd';
  type IndexTypeOmit = Omit<
    {
      a: number;
      b: string;
      c: boolean;
    },
    BadProps
  >;
}
