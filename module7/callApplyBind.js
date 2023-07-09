let person1 = {
  name: "Madhu Gorava",
  age: 23,
  gender: "M",

  //   getDetails: function () {
  //     console.log(`welcome! my name is ${this.name} and my age is ${this.age}`);
  //   },
};
let getDetails = function (city, power) {
  console.log(
    `welcome! my name is ${this.name} and my age is ${this.age} and my city is ${city} and my power is ${power}`
  );
};
let person2 = {
  name: "Jack Sparrow",
  age: 30,
  gender: "M",
};

// person1.getDetails();
// call() method : barrow functions or methods from one object to another
// person1.getDetails.call(person2);
getDetails.call(person1, "Chennai", "Stark Reactor");
// apply() method :
getDetails.apply(person2, ["HYD", "REACTOR"]);
// bind() method :
let myFunc = getDetails.bind(person2, "Chennai", "Stark Reactor");
console.log(myFunc);
myFunc();
