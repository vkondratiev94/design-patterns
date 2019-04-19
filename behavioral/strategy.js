// encapsulation
class Commute {
  travel (transport) {
    return transport.travelTime()
  }
}

class Vehicle {
  travelTime() {
    return this._timeTaken
  }
}

// strategy 1
class Bus extends Vehicle {
  constructor(timeTaken) {
    super()
    this._timeTaken = 10
  }
}

// strategy 2
class Taxi extends Vehicle {
  constructor(timeTaken) {
    super()
    this._timeTaken = 5
  }
}

// strategy 3
class PersonalCar extends Vehicle {
  constructor(timeTaken) {
    super()
    this._timeTaken = 3
  }
}

// usage
const commute = new Commute()

console.log(commute.travel(new Bus())) // 10
console.log(commute.travel(new Taxi())) // 5
console.log(commute.travel(new PersonalCar())) // 3