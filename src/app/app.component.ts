import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent {
  constructor() {
    type AppendToObject<
      T extends Record<any, any>,
      K extends PropertyKey,
      V
    > = {
      [key in keyof T | K]: key extends keyof T ? T[key] : V;
    };

    type Test = { id: '1' };
    type Result = AppendToObject<Test, 'value', 4>;
  }
}
