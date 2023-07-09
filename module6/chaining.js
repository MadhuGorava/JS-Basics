let arr = [
  { name: "A", age: 10, gender: "M" },
  { name: "B", age: 12, gender: "F" },
  { name: "C", age: 11, gender: "M" },
  { name: "D", age: 13, gender: "F" },
  { name: "E", age: 14, gender: "M" },
  { name: "F", age: 15, gender: "F" },
  { name: "G", age: 16, gender: "M" },
  { name: "H", age: 17, gender: "F" },
  { name: "I", age: 18, gender: "M" },
  { name: "J", age: 19, gender: "F" },
];

// 1-->get all mens from an array
// one way
// const mens = arr.filter((obj) => {
//   return obj.gender === "M";
// });
// const agesOfMen = mens.map((male) => {
//   return male.age;
// });
// console.log(mens);
// console.log(agesOfMen);
// another way
const mens = arr
  .filter((obj) => {
    return obj.gender === "M";
  })
  .map((male) => {
    return male.age;
  });
console.log(mens);
// example problem
const transactions = [1000, 2000, 3000, -4000, -5000, 6000, -7000, 8000, 9000];
// find the calculate total credited amount
const creditedAmount = transactions
  .filter((n) => {
    return n > 0;
  })
  .reduce((acc, val) => {
    return (acc += val);
  }, 0);
console.log(creditedAmount);
