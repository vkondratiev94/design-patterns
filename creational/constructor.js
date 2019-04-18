// es5
function OldHero (name, specialAbility) {
  this.name = name
  this.specialAbility = specialAbility

  // declaring a method on the object
  this.getDetails = function () {
    return this.name + ' can ' + this.specialAbility
  }
}

// es6
class Hero {
  constructor(name, specialAbility) {
    this._name = name
    this._specialAbility = specialAbility

    // declaring a method on the object
    this.getDetails = function () {
      return `${this._name} can ${this._specialAbility}`
    }
  }
}

const ironMan = new OldHero('Superman', 'fly')
const hulk = new Hero('Hulk', 'grow')

console.log(ironMan.getDetails())
console.log(hulk.getDetails())