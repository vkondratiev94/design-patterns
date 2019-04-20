class TrafficTower {
  constructor() {
    this._airplanes = []
  }
  
  register(airplane) {
    this._airplanes.push(airplane)
    airplane.register(this)
  }
  
  requestCoordinates(airplane) {
    return this
      ._airplanes.filter(plane => plane !== airplane)
      .map(plane => plane.coordinates)
  }
}

class Airplane {
  constructor(coords) {
    this.coordinates = coords
    this.trafficTower = null
  }
  
  register(tower) {
    this.trafficTower = tower
  }
  
  requestCoordinates() {
    if (this.trafficTower) return this.trafficTower.requestCoordinates(this)
    return null
  }
}

// usage
const tower = new TrafficTower()

const airplanes = [new Airplane(10), new Airplane(20), new Airplane(30)]
airplanes.forEach(plane => tower.register(plane))

console.log(airplanes.map(plane => plane.requestCoordinates())) // [[20, 30], [10, 30], [10, 20]]
