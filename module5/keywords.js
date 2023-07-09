// var a = 20;

// var a = 35; // this is called redeclaration of variables.

// if (a === 35) {
//   var b = 40;
//   console.log(b); // the variables declared with 'var' keyword are not block scoped, but they are function scoped.
// }
// console.log(b);

// function test() {
//   var c = 50;
//   console.log(c);
// }
// test();
// console.log(c);
// solution for redeclaration porblem is 'let' keyword, but they can be reassignable.
// let d = 40;
// if (true) {
//   let e = 60; // the variables declared with 'let' keyword are block scoped.
//   console.log(e);
// }
// console.log(e);

// 'const' keyword:
const a = 40; // it not supports both redeclaration and reassign.
// a = 50;
console.log(a); // the variables declared with 'const' keyword are block scoped.
