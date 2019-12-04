console.log(typeof Array, typeof new Array)

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push("Abia") // Mais indicado é o .push para adicionar elementos no array
console.log(aprovados.length)

aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 1, "Elemento1", "Elemento2")
console.log(aprovados)
