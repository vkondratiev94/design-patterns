const m = (function() {
  const privateVariable = 'privateVariable'

  function privateMethod() {
    return privateVariable
  }

  return {
    publicMethod () {
      return privateMethod()
    }
  }
}())

console.log(m.publicMethod())