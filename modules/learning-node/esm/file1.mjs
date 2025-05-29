// const var1 = require("./file2");
// const { a, add, b } = require("./file2");
// const { a: a3, add: add3, b: b3 } = require("./file3");

import { a, b } from "./file2.mjs"
import ADD from "./file2.mjs"
import { a as A3, add as Add3, b as B3 } from "./file3.mjs"

console.log(a);
console.log(ADD(2, 3));
console.log(b);

console.log(A3);
console.log(Add3(2, 3, 4));
console.log(B3);