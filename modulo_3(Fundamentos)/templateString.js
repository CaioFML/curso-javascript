const nome = 'Rebeca'
const interpolacao = "Olá ${nome}"
const template = `Olá ${nome}!`

console.log(template)
console.log(interpolacao)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado!')}`)