// interface Cat {
//   type: 'cat'
//   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
// }

// interface Dog {
//   type: 'dog'
//   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
//   color: 'brown' | 'white' | 'black'
// }

// type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
declare namespace LookUp {

  type LookUp<T, U> = T extends {
    type: U;
  }
    ? T
    : never;

  //e.g.
  interface Cat {
    type: 'cat';
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
  }

  interface Dog {
    type: 'dog';
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
    color: 'brown' | 'white' | 'black';
  }

  type MyDogType = LookUp<Cat | Dog, 'dog'>; // expected to be `Dog`
}
