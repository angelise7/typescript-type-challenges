declare namespace MyIsAny {
  type IsAny<T> = string extends string & T ? true : false;
}
