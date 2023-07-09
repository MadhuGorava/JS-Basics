// class is same as constructor, template for creating object by constructor method.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  welcome() {
    console.log(`Welcom ${this.name}`);
  }
}

const person = new Person("Madhu", 23);
console.log(person);
person.welcome();
