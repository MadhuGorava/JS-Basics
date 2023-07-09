// Today agenda about 'Prototype in JS'.
/* a prototype object is a object that is linked to your object by default whenever you create a object 
and inside that object you will find all the methods that you can use with your object. 

    regular object : --> object prototype 
                     --> pre build       --> pre build methods and properties
    by constructor function : --> that created function prototype --> this is for you to use 
                            --> object prototype                                     ---> null container
                            --> pre build       --> pre build methods and properties
   # prototype chaining : whenever two or more prototypes are linked or chained that process is called prototype chaining.
   # Dry Rule : you should not repeat your code.
*/

// let myObj = {};
// console.log(myObj);

// let person = {
//   name: "madhu",
//   age: 23,
// };
// console.log(person.hasOwnProperty("gender"));

// constructor function

function Person(_name, _age) {
  this.name = _name;
  this.age = _age;
}
Person.prototype.welcome = function () {
  console.log(`My name is ${this.name} and my age is ${this.age}`);
};
const newPerson1 = new Person("Jack", 23);
const newPerson2 = new Person("Chris", 45);
console.log(newPerson1);
console.log(newPerson2.welcome());
