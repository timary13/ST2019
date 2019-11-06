let IntBuilder = require('./IntBuilder.js');
let StringBuilder = require('./StringBuilder.js');


let b = new IntBuilder(2);
let x = b.plus(3,2).minus(1,3).multiply(2).divide(3).get();
console.log(x);
// x = b.get();
// console.log(x);

// let s = new StringBuilder("1");
// let sx = s.plus('234 5', '67');
// console.log(s.get());

//console.log(IntBuilder.random(131, 17));

// let m = new Map();
// m.set("minus", [1,2]);
// m.set("plus", 2);
// for (let entry of m) {
//     console.log(entry[1]);
// }
