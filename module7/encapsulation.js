/*
    Encapsulation : 
      --> encapsulation in JavaScript OOP involves bundling data and methods within an object, 
      using public and private members to control access, and providing a well-defined interface for interacting with the object.
*/

class person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
    this.getName = function () {
      return this.name;
    };
  }
}

const person1 = new person("madhu", 23);
person1.name = "Jack";
console.log(person1);
