// type Test = { id: '1' }
// type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
declare namespace AppendToObject {
  /**
   * 想对象内添加属性和值
   */
  type AppendToObject<T extends Record<any, any>, K extends PropertyKey, V> = {
    [key in keyof T | K]: key extends keyof T ? T[key] : V;
  };

  //e.g.
  type Result = AppendToObject<{ id: '1' }, 'value', 4>; // expected to be { id: '1', value: 4 }
}
