import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent {
  constructor() {
    type RemoveIndexSignature<Obj extends Record<string, any>> = {
      // [Key in keyof Obj as Key extends string ? Key : never]: Obj[Key];
      [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key];
    };

    type Dong = {
      [key1: string]: any;
      [key2: number]: any;
      sleep(): void;
      '2': 2;
      3: 3;
    };
    type Res = RemoveIndexSignature<Dong>;
    // expected to be { [x: string]: any; sleep: () => void;2: 2;}
  }
}
