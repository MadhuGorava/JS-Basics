/*
    'this' with Browser in (non-strict mode)
    1--> console.log(this) : window object
    2--> Regular function() : window object
    3--> obj-->fn() : object itself
    4--> obj-->fn()-->fn() : window object
*/

console.log(this); // window object

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
