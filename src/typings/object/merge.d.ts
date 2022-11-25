declare namespace Merge {
  /**
   * 合并两个类型,第二个类型覆盖第一个类型
   * 1.MyCopy.Copy为通用方法,重新构造一个类型,为了直接计算类型方便显示
   * 2.Omit<T,keyof U> 去除T类型中的U类型,
   * 3.& U 去除后的类型再和U类型取交叉类型
   */
  type Merge<T, U> = Copy.Copy<Omit<T, keyof U> & U>;

  type foo = {
    id: number;
    name: string;
    age: string;
  };
  type coo = {
    name: number;
    age: number;
    sex: number;
    type: number;
  };

  //e.g.
  type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
}
