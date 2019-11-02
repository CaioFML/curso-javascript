console.log("01)", "1" == 1)
console.log("02)", "1" === 1)
console.log("03)", "3" != 3)
console.log("04)", "3" !== 3)

console.log("05)", 2 < 3)
console.log("06)", 2 > 3)
console.log("07)", 2 <= 3)
console.log("08)", 2 >= 3)

const d1 = new Date(0) // Marco zero de criação da linguagem
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('09)', d1 == d2)
console.log('09)', d1.getTime() === d2.getTime()) // Tipo
console.log('09)', d1.getTime() === d2.getTime()) // Valor

console.log("12)", undefined == null)
console.log("12)", undefined === null)