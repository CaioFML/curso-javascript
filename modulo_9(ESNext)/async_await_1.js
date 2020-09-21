function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve(), tempo)
  })
}

// esperarPor(3000)
//   .then(() => console.log("Executando promise 1..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 2..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 3..."))

function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function executar() {
  let valor = await retornarValor()

  await esperarPor(1500)
  console.log(`Async/Await 1...${valor}`)

  await esperarPor(1500)
  console.log(`Async/Await 2...${valor}`)

  await esperarPor(1500)
  console.log(`Async/Await 3...${valor}`)

  return valor + 3
}

async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()

