// es5
function OldHero (name, ability) {
  this.name = name
  this.ability = ability

  // declaring a method on the object
  this.getDetails = function () {
    return this.name + ' can ' + this.ability
  }
}

// es6
class Hero {
  constructor(name, ability) {
    this._name = name
    this._ability = ability

    // declaring a method on the object
    this.getDetails = function () {
      return `${this._name} can ${this._ability}`
    }
  }
}

// usage
const ironMan = new OldHero('Superman', 'fly')
const hulk = new Hero('Hulk', 'grow')

console.log(ironMan.getDetails())
console.log(hulk.getDetails())