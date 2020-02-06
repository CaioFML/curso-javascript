console.log(this === global) // this nesse caso aponta para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
  console.log("Dentro de uma função...")
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)

}

this.perigo = "..."
logThis()
