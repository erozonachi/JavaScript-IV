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

  gradeStudent(student) {
    let score = Math.floor(Math.random()*99) + 1;
    score *= Math.random() > 0.5 ? 1 : -1;
    student.grade += score;
    if (student.grade > 100) {
      student.grade = 100;
    } else if (student.grade < 1) {
      student.grade = 1;
    }
  }

}
// Objects of Instructor
const gab = new Instructor({
  name: `Gabriel`,
  location: `Budapest`,
  age: 32,
  gender: `male`,
  favLanguage: `JavaScript`,
  specialty: `Front-end`,
  catchPhrase: `Positive vibes all the way!`,
});

const josh = new Instructor({
  name: `Joshua`,
  location: `Chigaco`,
  age: 36,
  gender: `male`,
  favLanguage: `Python`,
  specialty: `Back-end`,
  catchPhrase: `Code is everything...`,
});

// Student :- Another sub-class of Person
class Student extends Person {
  constructor(info) {
    super(info);
    this.previousBackground = info.previousBackground;
    this.className = info.className;
    this.favSubjects = info.favSubjects || [];
    this.grade = (info.grade > 100? 100 : info.grade) || 1;
  }

  listsSubjects() {
    if (this.favSubjects.length > 0) {
      this.favSubjects.forEach((subject, pos) => {
        console.log(`Favorite Subject ${pos+1}:- ${subject}`);
      });
    } else {
      console.log(`${this.name} has no favorite subject`);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grade > 70) {
      console.log(`${this.name} is due for graduation`);
    } else {
      console.log(`You total grade of ${this.grade}, you ${70-this.grade}% more to be able to graduate.`);
    }
  }
}
// Objects of Student class
const eneh = new Student({
  name: `Eneh`,
  location: `Lagos`,
  age: 25,
  gender: `male`,
  previousBackground: `Software dev`,
  className: `WEBEU2`,
  favSubjects: [`Algorithms`, `JavaScript`, `React`],
});

const jam = new Student({
  name: `James`,
  location: `Enugu`,
  age: 27,
  gender: `male`,
  previousBackground: `Software dev`,
  className: `IOSEU2`,
  grade: 50,
});


// ProjectManager :- Sub-class of Instructor class
class ProjectManager extends Instructor {
  constructor(info) {
    super(info);
    this.gradClassName = info.gradClassName;
    this.favInstructor = info.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
// Objects of Instructor
const max = new ProjectManager({
  name: `Maxime`,
  location: `Paris`,
  age: 31,
  gender: `male`,
  favLanguage: `JavaScript`,
  specialty: `Full-stack`,
  catchPhrase: `Bad energy stay far away!`,
  gradClassName: `WEBEU2`,
  favInstructor: `Gabriel`,
});

const alex = new ProjectManager({
  name: `Alex`,
  location: `Las Vegas`,
  age: 30,
  gender: `male`,
  favLanguage: `Python`,
  specialty: `Back-end`,
  catchPhrase: `We cook good codes here!`,
  gradClassName: `IOSEU2`,
  favInstructor: `Joshua`,
});

// Test

// Instructors
gab.speak();
gab.demo(`JavaScript IV - Calsses`);
gab.grade(eneh, `Advanced CSS`);
console.log(`------------------------------`);

josh.speak();
josh.demo(`Intro to Swift`);
josh.grade(jam, `Algorithms II`);
console.log(`------------------------------`);

// Students 
eneh.speak();
eneh.listsSubjects();
eneh.PRAssignment(`JavaScript IV`);
eneh.sprintChallenge(`JavaScript IV`);
console.log(`------------------------------`);

jam.speak();
jam.listsSubjects();
jam.PRAssignment(`Swift IV`);
jam.sprintChallenge(`Swift IV`);
console.log(`------------------------------`);

// Project Managers 
max.speak();
max.grade(eneh, `Advanced CSS`);
max.standUp(`WEBEU2-Maxime`);
max.debugsCode(eneh, `JavaScirpt III`);
console.log(`------------------------------`);

alex.speak();
alex.grade(jam, `Swift II`);
alex.standUp(`IOSEU2-Alex`);
alex.debugsCode(jam, `Swift IV`);
alex.gradeStudent(jam);
console.log(`------------------------------`);

// Extra Test for Stretch goals
console.log(`${jam.name}'s grade:- ${jam.grade}`);
jam.graduate();
