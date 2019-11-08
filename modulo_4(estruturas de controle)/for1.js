let contador = 1
while(contador <= 10) {
	console.log(`Contando: ${contador}`)
	contador++
}

console.log("\n Repetição com while \n")

for(let i = 1; i<=10; i++) {
	console.log(`Contando: ${i}`)
}

console.log("\n Repetição com for \n")

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++) {
	console.log(`Notas: ${notas[i]}`)
}

console.log("Terminou")