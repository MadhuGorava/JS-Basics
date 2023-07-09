// We will be given a number and we have to check that if the square of that number is even or not.
// imperative way of writing code
const num = 8;
const numSqured = num * num;
let isEven;
if (numSqured % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);
// Declarative way of writing code
const squareOfNumberChecking = (x) => ((x * x) % 2 === 0 ? true : false);
console.log(squareOfNumberChecking(5));
