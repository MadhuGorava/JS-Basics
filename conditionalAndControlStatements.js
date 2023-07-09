// if, else statements
let score = 90;
if (score >= 95 || score == 90) {
  console.log("A+");
} else if (score <= 95 && score >= 80) {
  console.log("A");
} else {
  console.log("B+");
}
// loops are the statements that we can use to control a flow of the program and to do repeatative task.
// the 'for' loop or 'for of' loop
// you have an array and you have to square each element of that array
let numArr = [1, 2, 3, 4, 5, 6];
let squaredArr = []; // empty arr
// for (let i = 0; i < numArr.length; i++) {
//   squaredArr.push(numArr[i] * numArr[i]);
// }
let color = ["red", "blue", "green"];
// the 'for-of' statement creates a loop iterating over the iterable objects
// including : built-in string, array, objects, map, set, etc.
// for (let num of numArr) {
//   squaredArr.push(num * num);
// }
// console.log(squaredArr);
// entries() - method gives or carry index of every entry in array.
for (let [index, ele] of color.entries()) {
  console.log(index + "-->" + ele);
}
// In JS, the for-in loop allows you to loop through the properties of an objects.
// the statement of code found within the loop body will be executed once for ech property of the objects.
let colors = {
  primary: "blue",
  secondary: "green",
  teritary: "white",
  success: "orange",
  danger: "red",
};

for (let color in colors) {
  console.log(color + "-->" + colors[color]);
}

// A while loop evaluate the condition inside the parenthesis ().
// if the condition evaluates to true, the code inside the while loop is executed.
// the condition is evaluated again.
//  this process continues until the condition is false.
// when the condition evaluates to false, the loop stops.
// synta
let i = 11;
// while (i < numArr.length) {
//   squaredArr.push(i * i);
//   i++;
// }
// console.log(squaredArr);
// do while executes for once whether the condition is true or false.
do {
  squaredArr.push(i * i);
  i++;
} while (i <= 10);
console.log(squaredArr);
