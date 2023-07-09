/* 
    Inheritance :
    1--> Classical Inheritance : methods and properties from base class can be put down or can be passed into derived class.
    --> like parent(){} to child(){} class
*/

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  welcome() {
    console.log(`welcome ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(_name, _age, _classStrength) {
    super(_name, _age);
    this.classStrength = _classStrength;
  }
  //   method inheritance
  test() {
    super.welcome();
  }
}
class Student extends Person {
  constructor(_name, _age, _cgpa) {
    super(_name, _age);
    this.cgpa = _cgpa;
  }
}
const Person1 = new Person("Pamela", 35);
console.log(Person1);
const Teacher1 = new Teacher("Rois", 40, 3);
console.log(Teacher1);
const Student1 = new Student("madhu", 23, 9.8);
console.log(Student1);
Teacher1.test();
