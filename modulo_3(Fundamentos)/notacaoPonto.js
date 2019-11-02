console.log(typeof console)
console.log(Math.ceil(6.1)) // Arredonda pra cima
const obj1 = {}
obj1.nome = 'Bola'
obj1["nome"] = "Bola2"
console.log(obj1.nome)

function Obj(nome) {
	this.nome = nome
	this.exec = function() {
		console.log("Exec...")
	}
}

const obj2 = new Obj("Caio")
console.log(obj2)
obj2.exec()