const obj = {
  nome: "Rebeca",
  idade: 21,
  falar() {
    return `Meu nome é ${this.nome} e minha idade ${this.idade}`
  }
}

console.log(obj.falar())
console.log(JSON.stringify(obj)) // TRANSFORMAR EM JSON

// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse("{ \"a\": 1, \"b\": \"string\", \"c\": true, \"d\": {}, \"e\": [] }"))
