const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (re, res, next) => {
  console.log("Middleware 1...")
  next()
})

app.get('/produtos', (re, res, next) => {
  res.send({ nome: "Notebook", preco: 123.45 }) // Converter para JSON automaticamente
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)
})
