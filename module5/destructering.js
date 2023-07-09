// The destructuring assignment syntax is a JS expression that makes it possible to unpack values.
// from arrays or properties from objects into distinct values.

let arr = [1, 2, 3, 4, 5, 6];
// single item destructuring from an array.
// let a = arr[0];
// let b = arr[1];

// console.log(a);
// console.log(b);
// multiple items destructuring of an array.
// let [a, b, c, d, e, f] = arr;
// console.log(e);

// when we destructuring the object we have to destruct by key names.
let person = {
  name: "madhu",
  age: 22,
  address: {
    city: "Anantapur",
    state: "AP",
  },
};

let {
  name: a,
  age: b,
  address: { city: c, state: s },
} = person;
console.log(s);
