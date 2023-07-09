/* 
    Polymorphism(Having many forms)
         |
    poly : many + morph : forms + ism : methods
*/
// Example
// same method in different classes but gives different output
class Person {
  sound() {
    console.log("He is making noise");
  }
}

class Dog {
  sound() {
    console.log("dog is barking");
  }
}
class Cat {
  sound() {
    console.log("cat mews");
  }
}
const person = new Person();
const dog = new Dog();
const cat = new Cat();
person.sound();
dog.sound();
cat.sound();
