//  arrays provides you an ordered collection of data.
let arr = [1, 2.2, "madhu", true];
console.log(arr);
// you can access and replace an items of an array by using index.
let a = arr[0];
console.log(a);
arr[0] = 10;
console.log(arr);
// Length  property
console.log(arr.length);
// Some inbuilt methods for array
// pop()
arr.pop();
console.log("pop element", arr.pop());
// push()
arr.push(20);
console.log("push element", arr.push(25));
// shift()
arr.shift();
console.log("shift element", arr.shift());
// unshift()
arr.unshift(30);
console.log("unshift element", arr.unshift(35));
console.log(arr);
