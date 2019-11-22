function criarProduto(nome, valor) {
	return {
		nome,
		preco: valor * 0.95,
		desconto: "5%"
	}
}

const prod1 = criarProduto("Carteira", 100)

console.log(prod1)