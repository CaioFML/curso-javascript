// armazendo uma funcao em uma variavel
const imprimirSomar = function(a, b) {
    console.log(a + b)
}

imprimirSomar(2, 3)

// Armazendo uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))