class Icecream {
  constructor (flavour, price) {
    this.flavour = flavour
    this.price = price
  }
}

class IcecreamFactory {
  constructor() {
    this._icecreams = []
  }
  
  createIcecream(flavour, price) {
    const icecream = this.getIcecream(flavour)
    if (icecream) {
      return icecream
    } else {
      const newIcecream = new Icecream(flavour, price)
      this._icecreams.push(newIcecream)
      return newIcecream
    }
  }
  
  getIcecream(flavour) {
    return this._icecreams.find(cream => cream.flavour === flavour)
  }
}

// usage
const factory = new IcecreamFactory()

const chocoVanilla = factory.createIcecream('chocolate and vanilla', 15)
const vanillaChoco = factory.createIcecream('chocolate and vanilla', 15)

// reference to the same object
console.log(chocoVanilla === vanillaChoco) // true