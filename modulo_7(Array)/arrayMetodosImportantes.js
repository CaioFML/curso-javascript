const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // Remove o ultimo elemento
console.log(pilotos)

pilotos.push("Verstappen") // Adiciona no final
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift("Hamilton") // Adiciona no começo
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // splice(apartir de, remover, adicionar)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
