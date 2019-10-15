let valor // Não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
    // console.log(valor.toString())

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evitar atribuir undefined

console.log(!!produto.preco)
    // delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)