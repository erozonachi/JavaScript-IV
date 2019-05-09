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

// Instructor :- Sub-class of Person
class Instructor extends Person {
  constructor(info) {
    super(info);
    this.specialty = info.specialty;
    this.favLanguage = info.favLanguage;
    this.catchPhrase = info.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}
