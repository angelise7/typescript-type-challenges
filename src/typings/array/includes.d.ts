// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;
// // expected to be `false`

declare namespace Includes {
  /**
   * 同Array.includes()
   */
  type Includes<T extends readonly unknown[], U> = T extends [
    infer First,
    ...infer Rest
  ]
    ? IsEqual.IsEqual<First, U> extends true
      ? true
      : Includes<Rest, U>
    : false;

  //e.g.
  type Res = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>;
}
