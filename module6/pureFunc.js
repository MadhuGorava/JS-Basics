// Impure Functions which are give different outputs for same inputs based on external variable.

let a = 50;
function add(x) {
  console.log(x + a);
  a++;
}
add(5);
add(5);
add(5);
// Pure Functions are which give same outputs for same inputs, incase if you using external or built-in methods in pure functions it is said to be impure.
function addition(x, a) {
  return x + a;
}
console.log(addition(5, 7));
console.log(addition(5, 7));
