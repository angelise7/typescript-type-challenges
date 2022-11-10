import { Component } from '@angular/core';

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
    type Arr1 = [1, 2, 3, 4];

    type Lenght = MyLength.Length<Arr1>;
  }
}
