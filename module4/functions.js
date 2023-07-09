// Basic Functions in JS
function hello() {
  console.log("Hello!");
}
hello();

// parameters and arguments

function add(a, b) {
  console.log(a + b);
}
add(1, 2);

// Function Expression

let sub = function (a, b) {
  return a - b;
  //   console.log(a - b);
};
// sub(1, 2)
// let subtract = sub;
console.log(sub(1, 2));

// Function Hoisting

// only function declarations are hooisted functions
// console.log(a);
// greet();
// func(m, n);
var a = 1;
function greet() {
  console.log("Welcome  to Functions");
}
// function expression are not hoisting
let func = function (m, n) {
  console.log(m * n);
};
