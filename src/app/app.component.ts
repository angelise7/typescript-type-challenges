import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly: MyReadonly.Readonly<Todo> = {
    title: 'hello',
    description: 'description',
    completed: false,
  };

  pick: MyPick.Pick<Todo, 'title'> = {
    title: '1',
  };

  constructor() {
    // type Result = MyExclude.Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c';
    // type ExampleType = Promise<Promise<string>>;
    // type Result = MyAwaited.Awaited<ExampleType>; // string
    // type A = MyIf.If<Boolean(1), number, string>; // expected to be 'a'
    // const a: A = 1;
    // type Result = MyConcat.Concat<[1], [2]>; // expected to be [1, 2]
    // type isPillarMen = MyIncludes.Includes<
    //   ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
    //   'Santana'
    // >; // expected to be `false`
    // type A = {
    //   id: number;
    //   name: string;
    //   start_time: number;
    //   end_time: number;
    //   activity_product_detail: {
    //     id: number;
    //     activity_product_name: string;
    //   };
    // };
    // type _A = MyCamel.Camel<A>;
    // const a: _A = {
    //   id: 1,
    //   name: 'string',
    //   startTime: 1244,
    //   endTime: 1233,
    //   activityProductDetail: {
    //     id: 2,
    //     activityProductName: '1121',
    //   },
    // };
    // type __A = MyKebab.Kebab<_A>;
    // type A = {
    //   id: number;
    //   name: string;
    //   age: number;
    // };
    // type _A = PartialByKeys.PartialByKeys<A, 'id' | 'name'>;

    // const a: _A = {
    //   name: '12',
    //   age: 1,
    // };
  }
}
