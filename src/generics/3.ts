function merge<A extends object, B extends object>(objA: A, objB: B): A & B {
  return { ...objA, ...objB };
}

const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };

export const merged = merge(objA, objB);
