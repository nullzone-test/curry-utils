export function curry(fn) {
  if (typeof fn !== 'function') throw new TypeError('Expected a function');
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}
