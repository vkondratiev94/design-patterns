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

// usage
const factory = new PetFactory()

const doggy = factory.createPet('dog')
const kitty = factory.createPet('cat')

console.log(doggy.getDetails())
console.log(kitty.getDetails())