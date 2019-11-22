// cons prod1 = {
// 	nome: "...",
// 	preco: 45
// }

// cons prod2 = {
// 	nome: "...",
// 	preco: 454
// }

// Factory simples
function criarPessoa() {
	return {
		nome: "Ana",
		sobrenome: "Silva"
	}
}

console.log(criarPessoa())