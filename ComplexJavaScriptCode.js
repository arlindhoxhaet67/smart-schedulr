/*
Filename: ComplexJavaScriptCode.js
Content: Complex JavaScript code demonstrating various concepts and techniques.

*/

// Class for creating a Person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create a few person objects
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
const person3 = new Person("Charlie", 35);

// Perform some operations on person objects
person1.sayHello();
person2.sayHello();
person3.sayHello();

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate the factorial of a number
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}.`);

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Check if a number is prime
const num = 17;
console.log(`${num} is ${isPrime(num) ? "prime" : "not prime"}.`);

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse a string
const message = "Hello, World!";
console.log(`Reversed string: ${reverseString(message)}.`);

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Multiply each number in the array by 2
const multipliedNumbers = numbers.map((num) => num * 2);
console.log("Multiplied numbers:", multipliedNumbers);

// Sum of numbers in the array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a random number within a range
const randomNumber = getRandomNumber(1, 10);
console.log("Random number:", randomNumber);

// JSON data
const jsonData = {
  name: "John",
  age: 30,
  city: "New York",
};

// Convert JSON data to string
const jsonString = JSON.stringify(jsonData);
console.log("JSON string:", jsonString);

// Parse a JSON string
const parsedData = JSON.parse('{"name":"Alice","age":25,"city":"London"}');
console.log("Parsed data:", parsedData);

// Asynchronous function with callback
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

// Fetch data asynchronously
fetchData((data) => {
  console.log("Async Callback:", data);
});

// Promises
const fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

// Fetch data using Promises
fetchDataPromise().then((data) => {
  console.log("Promise:", data);
});

// Async/Await
const fetchAsyncData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

// Fetch data using Async/Await
(async () => {
  const data = await fetchAsyncData();
  console.log("Async/Await:", data);
})();

// Exported module
export default {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};