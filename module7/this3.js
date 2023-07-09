"use strict";

/* 
    using 'this' keyword in Browser with strict mode:
    1--> console.log(this) : window object
    2--> Regular function() : undefined
    3--> obj-->fn() : object itself
    4--> obj-->fn()-->fn() : undefined
*/

console.log(this); // window object

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
