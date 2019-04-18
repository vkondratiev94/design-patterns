class PetFactory {
  constructor() {
    this.createPet = function(type) {
      let pet
      if (type === 'dog') pet = new Dog()
      else if (type === 'cat') pet = new Cat()
      pet.getDetails = function() {
        return `This pet is an instance of ${this._type}`
      }
      return pet
    }
  }
}

class Dog {
  constructor() {
    this._type = 'dog'
  }
}

class Cat {
  constructor() {
    this._type = 'cat'
  }
}

const factory = new PetFactory()

const volt = factory.createPet('dog')
const garfield = factory.createPet('cat')

console.log(volt.getDetails())
console.log(garfield.getDetails())