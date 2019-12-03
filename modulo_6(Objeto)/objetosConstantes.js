// Pessoa -> 123 -> {...}
const pessoa = { nome: "João" }
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: "Ana" }

Object.freeze(pessoa)

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
console.log(pessoa)