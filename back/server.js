const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const {saveContract, getContractList, readJSON} = require('./atualizaJson')

dotenv.config()
app.use(cors())
app.use(express.json())

app.post('/api/salvar-formulario', (req, res) => {
  const formData = req.body
  saveContract(formData)
  res.send('Dados recebidos com sucesso!')
})

app.get('/api/lista-de-contratos', (req, res) => {
  const contratos = readJSON()
  res.json(contratos)
})

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`)
})