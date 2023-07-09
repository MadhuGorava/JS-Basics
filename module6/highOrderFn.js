/* 
    What is a higher order function?
    --> Higher order functions are functions that operate on other functions, eithe by taking them as arguments or by returning them. 
    In simple words, A higher-order function is a function that receives a function as an argument or returns the function as output.
*/

// let array = [1, 2, 3, 4, 5];

// map()
// map will loop through every element of your array and will perform specific operations that you have provided.
// map method will always return you a new array with your results.
// const squaredNum = array.map(function (n) {
//   return n * n;
// });
// console.log(squaredNum);
const transactions = [1000, 2000, 3000, 400, -568];
const intoDollar = 80;
// map() and forEach() are same but forEach won't return any values it has it's own scope and It prints values single format but map gives whole new array.
const reDollar = transactions.forEach((num) => {
  console.log((num / intoDollar).toFixed(0));
});

// 'find()' method returns the first element of an array that satisfy the condition.
let firstWithDrawal = transactions.find((n) => {
  return n < 0;
});
console.log(firstWithDrawal);
// findIndex() method returns the first element index of an array that satisfy the condition.
let firstWithDrawalIndex = transactions.findIndex((n) => {
  return n < 0;
});
console.log(firstWithDrawalIndex);
// some() method : condition check: to get true or false based on a condition
// it will return true if even 1 element satisfies the condition.
let result = transactions.some((n) => {
  return n > 0;
});
console.log(result);
// every() method : condition check: to get true or false based on a condition
// it will return true if each element satisfies the condition.
let ans = transactions.every((n) => {
  return n > 0;
});
console.log(ans);
// filter() method
// filter() returns a new array it will return all those elements that matches the specific condition
// if the condition is true it will return the element for that condition and if it is false it will discard that element
let array = [-96, -78, 515, 123, 654, 789, 987];
// const evenEle = array.filter((n) => {
//   return n > 0;
// });
// console.log(evenEle);

// let sum = 0; ---> // this is accumulator.
// for (let num in array) {
//   sum = sum + num;
// }
// console.log(sum);

// reduce() method : it will give single value like sum of an array or product of a arry.

const sum = array.reduce((acc, val) => {
  let updatedVal = (acc *= val);
  return updatedVal;
}, 1);
console.log(sum);
