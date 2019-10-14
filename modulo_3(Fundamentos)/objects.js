const prod1 = {}
prod1.nome = "Caio"
prod1.preco = 4.99
prod1["desconto"] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Carlos',
    preco: 5.00,
    desconto: 0.3,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)