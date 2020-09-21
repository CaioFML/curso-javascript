const http = require("http")

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''

      res.on("data", dados => {
        resultado += dados
      })

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado))
        } catch(e) {
          reject(e)
        }
      })
    })
  })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...

let obterAlunos = async () => {
  const turma_a = await getTurma('A')
  const turma_b = await getTurma('B')
  const turma_c = await getTurma('C')

  return [].concat(turma_a, turma_b, turma_c)
} // retorna um objeto AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))