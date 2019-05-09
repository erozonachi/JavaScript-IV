/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // class method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(playerInfo) {
    this.createdAt = playerInfo.createdAt;
    this.name = playerInfo.name;
    this.dimensions = playerInfo.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject class
*/
class CharacterStats extends GameObject {
  constructor(playerInfo) {
    super(playerInfo);
    this.healthPoints = playerInfo.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage`;
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(playerInfo) {
    super(playerInfo);
    this.team = playerInfo.team;
    this.weapons = playerInfo.weapons;
    this.language = playerInfo.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero classes that inherit from the Humanoid class.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  class Villain extends Humanoid { // Villain class
    constructor(playerInfo) {
      super(playerInfo);
    }
    
    reduceHealthPoints(points) {
      this.healthPoints -= points;
      if (this.healthPoints <= 0) {
        return this.destroy();
      }
      return `${this.name}'s health points is reduced by ${points}`;
    }
  }

  class Hero extends Villain { // Hero class
    constructor(playerInfo) {
      super(playerInfo);
    }
  }

  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  const villaKing = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 25,
    name: 'Sir Kay',
    team: 'The Mafians',
    weapons: [
      'Poisonous Sword',
      'Shield',
    ],
    language: 'Igbo Tongue',
  });

  const westernWarrior = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    name: 'Lavida-Loca',
    team: 'Sambisa Forest',
    weapons: [
      'Gun',
      'Dagger',
    ],
    language: 'Uburu',
  });

  console.log(villaKing.createdAt); // Today's date
  console.log(villaKing.name); // Sir Kay
  console.log(villaKing.healthPoints); // 25
  console.log(villaKing.team); // The Mafians
  console.log(villaKing.reduceHealthPoints(30)); // Sir Kay was removed from the game.

  console.log(westernWarrior.weapons); // ['Gun', 'Dagger']
  console.log(westernWarrior.language); // Uburu
  console.log(westernWarrior.greet()); // Lavida-Loca offers a greeting in Uburu.
  console.log(westernWarrior.takeDamage()); // Lavida-Loca took damage.
  console.log(westernWarrior.reduceHealthPoints(5)); // Lavida-Loca's health points is reduced by 5.
