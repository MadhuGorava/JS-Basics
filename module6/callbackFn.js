/*
    What is an callback function?
    --> In JS, a callback function is a function that is passed into another function as a argument. This function can be invoked at later stage of time.
    --> since, in JS, functions are objects, functions can be passed as arguments.
*/
function printFirstName(fname, cb) {
  console.log(fname);
  cb("Gorava");
}
function printLastName(lname) {
  console.log(lname);
}

printFirstName("Madhu", printLastName); // --> this is callback function

// by using arrow function
const isEven = (a) => {
  return a % 2 === 0;
};

const printEvenNum = (isEven, num) => {
  let isItEven = isEven(num);
  console.log(`The given number ${num} is even ${isItEven}`);
};
printEvenNum(isEven, 8);
