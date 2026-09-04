require('./helpers/test-env');
const assert = require('assert');
function curry(fn) {
  if (typeof fn !== 'function') throw new TypeError();
  return function c(...a) { if (a.length >= fn.length) return fn(...a); return (...m) => c(...a, ...m); };
}
const add = curry((a, b) => a + b);
assert.strictEqual(add(1)(2), 3);
assert.strictEqual(add(1, 2), 3);
assert.throws(() => curry(42));
console.log('all tests passed');
