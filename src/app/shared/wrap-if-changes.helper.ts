export function wrapIfChanges<T, R>(cb: (v: T) => R): (v: T) => R {
  let previous: T;

  return (input: T): R => {
    if (previous !== input) {
      previous = input;
      return cb(input);
    }
  };
}
