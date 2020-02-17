// Operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto

const funcionario = { nome: "Maria", salario: 12345.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ["João", "Maria", "Pedro"]
const grupoFinal = ["Rebeca", ...grupoA, "Mariana"]
console.log(grupoFinal)
