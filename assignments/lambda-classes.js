// CODE here for your Lambda Classes

// Person :- The generic class
class Person {
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.gender = info.gender;
    this.location = info.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
