function compras(trab1, trab2) {
	const comprarSorvete = trab1 || trab2 // || = ou
	const comprarTv50 = trab1 && trab2 // && = e
	// const comprarTv32 = !!(trabalho! ^ trabalho2) //bitwise xor
	const comprarTv32 = trab1 != trab2
	const manterSaudavel = !comprarSorvete // operador unário

	return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //Omitir as chaves faz com que seja criado automaticamente sem precisar duplicar
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))