const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados")

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (re, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })

  res.send(produto) // json
})

app.put("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })

  res.send(produto) // json
})

app.delete("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.deleteProduto(re.params.id)

  res.send(produto) // json
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)
})
