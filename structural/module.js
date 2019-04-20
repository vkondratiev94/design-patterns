const module = (function() {
  const privateVariable = 'privateVariable'

  function privateMethod() {
    return privateVariable
  }

  return {
    publicMethod () {
      return privateMethod()
    }
  }
})()

module.publicMethod()