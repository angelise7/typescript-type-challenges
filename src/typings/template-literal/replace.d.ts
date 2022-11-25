declare namespace MyReplace {
  /**
   * 同String.replace()
   */
  type Replace<
    T extends string,
    K extends string,
    U extends string
  > = T extends `${infer Start}${K}${infer End}` ? `${Start}${U}${End}` : never;

  //e.g.
  type Res = Replace<'types are fun', 'fun', 'awesome'>; // expected to be 'types are awesome!'
}
