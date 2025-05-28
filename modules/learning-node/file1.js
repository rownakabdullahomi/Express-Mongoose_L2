// const var1 = require("./file2");
const { a, add, b } = require("./file2");
const { a: a3, add: add3, b: b3 } = require("./file3");

console.log(a3);
console.log(add3(2, 3, 4));
console.log(b3);