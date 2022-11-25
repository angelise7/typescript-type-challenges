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

  type Res = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>; // expected to be `false`
}
