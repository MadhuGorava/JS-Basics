"use strict";

/* 
    using 'this' keyword in Node.js with strict mode:
    1--> console.log(this) : {}
    2--> Regular function() : undefined
    3--> obj-->fn() : object itself
    4--> obj-->fn()-->fn() : undefined
*/

console.log(this); // empty object

function display() {
  console.log(this);
}
display();

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
