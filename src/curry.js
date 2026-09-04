export function curry(fn){return function curried(...args){if(args.length>=fn.length)return fn(...args);return(...more)=>curried(...args,...more)}}
