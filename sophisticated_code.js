/**
 * Filename: sophisticated_code.js
 * 
 * This code demonstrates a complex and sophisticated implementation utilizing various JavaScript concepts and patterns.
 * It simulates a car rental system with multiple cars, customers, and rental functionalities.
 */

// *********************** Car Class *************************

class Car {
  constructor(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.available = true;
  }

  rent() {
    this.available = false;
  }

  returnCar() {
    this.available = true;
  }
}

// *********************** Customer Class *************************

class Customer {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  rentCar(car) {
    if (car.available) {
      car.rent();
      console.log('Car rented successfully!');
    } else {
      console.log('Car is not available for rental!');
    }
  }

  returnCar(car) {
    if (!car.available) {
      car.returnCar();
      console.log('Car returned successfully!');
    } else {
      console.log('Car is already available!');
    }
  }
}

// *********************** Car Rental System *************************

class CarRentalSystem {
  constructor() {
    this.cars = [];
    this.customers = [];
  }

  addCar(make, model, year, mileage) {
    const car = new Car(make, model, year, mileage);
    this.cars.push(car);
  }

  addCustomer(name, age, email) {
    const customer = new Customer(name, age, email);
    this.customers.push(customer);
  }

  rentCar(customerIndex, carIndex) {
    const customer = this.customers[customerIndex];
    const car = this.cars[carIndex];
    customer.rentCar(car);
  }

  returnCar(customerIndex, carIndex) {
    const customer = this.customers[customerIndex];
    const car = this.cars[carIndex];
    customer.returnCar(car);
  }

  listAvailableCars() {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].available) {
        console.log(`Car ${i + 1}: ${this.cars[i].make} ${this.cars[i].model}`);
      }
    }
  }
}

// *********************** Demo *************************

const rentalSystem = new CarRentalSystem();

rentalSystem.addCar('Tesla', 'Model S', 2021, 2000);
rentalSystem.addCar('BMW', 'X5', 2020, 5000);
rentalSystem.addCar('Audi', 'A6', 2019, 10000);

rentalSystem.addCustomer('John Doe', 30, 'johndoe@example.com');
rentalSystem.addCustomer('Jane Smith', 25, 'janesmith@example.com');

rentalSystem.rentCar(0, 0);
rentalSystem.rentCar(1, 1);

rentalSystem.listAvailableCars();

rentalSystem.returnCar(0, 0);

// Output:
// Car rented successfully!
// Car rented successfully!
// Car 3: Audi A6
// Car returned successfully!