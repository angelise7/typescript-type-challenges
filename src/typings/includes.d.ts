declare namespace MyIncludes {
  // type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

  type Equal<T, U> = T extends U ? true : false;

  type Includes<T extends readonly any[], U> = T extends [
    infer First,
    ...infer Rest
  ]
    ? Equal<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false;
}
