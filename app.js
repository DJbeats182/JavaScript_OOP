console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pet = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(remHobby) {
    this.hobbies.filter((hobby) => hobby != remHobby);
    // const index = this.hobbies.indexOf(remHobby);
    // this.hobbies.splice(index, 1);
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

//Exercise 2

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  //Override
  greeting() {
    console.log("Hello, I am a Coder!");
  }
}

//Exercise 3

let person = new Person("Ben", 0, "Birmingham", ["running", "diy", "reading"]);

person.addHobby("fencing");

let dj = new Coder("DJ", 5, "Vineyard", [
  "Acting",
  "Music",
  "Coding",
  "Learning Languages",
]);

console.log(person);
person.greeting();
console.log(dj);
dj.greeting();

//Exercise 4

class Calculator {
  result = 0;

  add(num1, num2) {
    this.result = num1 + num2;    
  }

  subtract(num1, num2) {
    this.result = num1 - num2;
  }

  multiply(num1, num2) {
    this.result = num1 * num2;
  }

  divide(num1, num2) {
    this.result = num1 / num2;
  }

  displayResult() {
    console.log(this.result);
  }
}

let myCalculator = new Calculator();
myCalculator.add(1, 4);
myCalculator.displayResult();
myCalculator.subtract(4, 1);
myCalculator.displayResult();
myCalculator.multiply(4, 5);
myCalculator.displayResult();
myCalculator.divide(15, 3);
myCalculator.displayResult();