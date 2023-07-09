/*
    'this' with Node.js in (non-strict mode)
    1--> console.log(this) : {}
    2--> Regular function() : Global Object
    3--> obj-->fn() : object itself
    4--> obj-->fn()-->fn() : Global Object
*/

console.log(this); // empty object

function displayResult() {
  console.log(this);
}
displayResult();

let myObj = {
  name: "madhu",
  age: 22,
  myFunc: function () {
    console.log(this);
  },
};
myObj.myFunc();
let myObj1 = {
  name: "madhu",
  age: 22,
  myFunc: function () {
    function myfn() {
      console.log(this);
    }
    myfn();
  },
};
myObj1.myFunc();
