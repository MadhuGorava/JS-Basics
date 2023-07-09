// When we have create multiple objects with same  keys constructor functons are very useful.
/*
    like these:
    const car1 = {
        name: "B1",
        company: "Benz",
        price: '2 cr'
    }

    const car2 = {
        name: "B3",
        company: "Audi",
        price: '1.5 cr'
    }
*/

// Constructor Functions

function createCar(_name, _company, _price) {
  this.name = _name;
  this.company = _company;
  this.price = _price;

  this.drive = function () {
    console.log(
      `I am driving ${this.name} this is new model of ${this.company}`
    );
  };
}

const car = new createCar("A1", "Benz", "2 cr");
console.log(car);
car.drive();
