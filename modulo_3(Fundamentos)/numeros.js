const n1 = 1.0
const n2 = Number('2.0')

console.log(n1, n2)
console.log(Number.isInteger(n1))

const prova1 = 9.871
const prova2 = 6.871

const total = prova1 * n1 + prova2 * n2
const media = total / (n1 + n2)

console.log(media.toFixed(2))
console.log(total.toString())
console.log(total.toString(2))
console.log(typeof media)
console.log(typeof Number)