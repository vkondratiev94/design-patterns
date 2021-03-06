const car = {
  numOfWheels: 4,
  startEngine () {
    return 'engine started'
  },
  stopEngine () {
    return 'engine stopped'
  }
}

const ownedCar = Object.create(car, {
  owner: {
    value: 'me',
    enumerable: true
  }
})

console.log(ownedCar.__proto__ === car) // true