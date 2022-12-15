declare namespace BEM {
  /**
   * BEM规范
   */
  type BEM<
    B extends string,
    E extends string[],
    M extends string[]
  > = `${B}__${E[number]}--${M[number]}`;

  //e.g.
  type res = BEM<'btn', ['price'], ['success', 'error']>;
}
