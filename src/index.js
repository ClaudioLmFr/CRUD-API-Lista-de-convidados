const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let arrConvidados = []

app.get('/convidado/homens', (req, res) => {
  res.send('Esses são os homens convidados')
})

app.get('/convidado', (req, res) => {
  res.json(arrConvidados)
})

app.post('/convidado', (req, res) => {
  arrConvidados.push(req.body)
  res.status(200).json({
    mensagem: "Cliente cadastrado com sucesso!",
    dados: arrConvidados
  })
})

app.delete('/convidado/:id', (req, res) => {
  const indexPessoa = arrConvidados.findIndex(pessoa => pessoa.id == req.params.id)
  arrConvidados.splice(indexPessoa, 1)
  res.status(200).json({
    mensagem: "Convidado deletado com sucesso!",
    dados: arrConvidados
  })
})

app.put('/convidado/:id', (req, res) => {
  const indexPessoa = arrConvidados.findIndex(pessoa => pessoa.id == req.params.id)
  const objAlterarPessoa = {
    nome: req.body.nome,
    idade: req.body.idade, 
    sexo: req.body.sexo, 
    id: arrConvidados[indexPessoa].id
  }
  arrConvidados.splice(indexPessoa, 1, objAlterarPessoa)
  res.status(200).json({
    mensagem: "Alterado com sucesso!",
    dados: arrConvidados
  })
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`)
})

