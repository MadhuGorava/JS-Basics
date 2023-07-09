//  In JS, an 'object' is an unordered collection of key-value pairs. ecah key-value pair is called a property.
// The key of property can be a string, And the valueof a property can be any value, e.g., a 'string', an 'array', and even a 'function'.
// To create an object we can use most popular method 'object literal notation'.
let person = {
  firstName: "Madhu",
  lastName: "Gorava",
  age: 22,
  languages: ["Python", "JS", "React Js"],
  address: {
    city: "ATP",
    state: "Ap",
  },
  ownsCar: false,
};
console.log(person);
// Dot notation
console.log(person.firstName);
// Bracket notation
let key = "age";
console.log(person[key]);
person.age = 25;
console.log(person.languages);
let lan = person.address;
console.log(lan);
delete person.address;
console.log(person);
