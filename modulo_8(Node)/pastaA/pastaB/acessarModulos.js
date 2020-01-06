const moduloA = require('../../moduloA') // Nao funciona 'moduloa' no linux, mas no MAC e Windows sim, entao respeite o casesensitive

console.log(moduloA.ola)

const saudacao = require('saudacao') // Verifica o arquivo index.js dentro da pasta no node_modules
console.log(saudacao.ola)

const pastaC = require('./pastaC')
console.log(pastaC.ola2)

const http = require('http')
http.createServer((req, res) => {
  res.write("Bom dia!")
  res.end()
}).listen(8080) // localhost:8080 fica levantado
