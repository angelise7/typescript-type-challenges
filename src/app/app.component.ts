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

    type Result = MyConcat.Concat<[1], [2]>; // expected to be [1, 2]

    type isPillarMen = MyIncludes.Includes<
      ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
      'Santana'
    >; // expected to be `false`
  }
}
