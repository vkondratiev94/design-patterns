class CumulativeSum {
  constructor(initialValue = 0) {
    this.sum = initialValue
  }
  
  add (value = 0) {
    this.sum += value
    return this
  }
}

// usage
const sum1 = new CumulativeSum(10)
console.log(sum1.add(13).add(10).sum)

const sum2 = new CumulativeSum(70)
console.log(sum2.add(3).add(4).sum)