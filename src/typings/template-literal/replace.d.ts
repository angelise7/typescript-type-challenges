declare namespace MyReplace {
  // type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

  /**
   * 同String.replace()
   */
  type Replace<
    T extends string,
    K extends string,
    U extends string
  > = T extends `${infer Start}${K}${infer End}` ? `${Start}${U}${End}` : never;

  // type replaced = Replace<'types are fun', 'fun', 'awesome'>; // expected to be 'types are awesome!'
}
