class Book {
  constructor(title, author, price) {
    this._title = title
    this._author = author
    this.price = price
    
    this.getDetails = () => `${this._title} ${this._author}`
  }
}

// decorator 1
const giftWrap = book => {
  book.isWrapped = true
  book.unwrap = () => `Unwrapped ${book.getDetails()}`
  return book
}

// decorator 2
const hardbindBook = book => {
  book.isHardbound = true
  book.price += 5
  return book
}

// usage
const alchemist = giftWrap(new Book('The Alchemist', 'Paulo Coelho', 10))
console.log(alchemist.isWrapped) // true
console.log(alchemist.unwrap())

const eloquentJs = hardbindBook(new Book('Eloquent JavaScript', 'Community', 20))
console.log(eloquentJs.isHardbound) // true
console.log(eloquentJs.price) // 25