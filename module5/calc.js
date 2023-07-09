function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// I export this file into another file by using ES6.
// module.exports = { add, sub, multi, div };

// you can also export by using object desructuring
module.exports = {
  addition: add,
  subtraction: sub,
  multiplication: multi,
  division: div,
};
