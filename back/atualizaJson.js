const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

function readJSON() {
  try {
    const conteudo = fs.readFileSync('contratos.json', 'utf8')
    if (conteudo.trim() === '') {
      const novoJSON = { contratos: [] }
      fs.writeFileSync('contratos.json', JSON.stringify(novoJSON, null, 2))
      return novoJSON
    } else {
      return JSON.parse(conteudo)
    }
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error)
    return null
  }
}

/* 
console.log(readJSON())
const obj = readJSON().contratos
console.log(obj) */

function saveContract(novoContrato) {
  contractList = readJSON()
  novoContrato.key = uuidv4()
  contractList.contratos.push(novoContrato)
  const contractsJSON = JSON.stringify(contractList, null, 2)
  fs.writeFileSync('contratos.json', contractsJSON, 'utf8')
  return novoContrato.key
}

function getContractList() {
  jsonfile = readJSON().contratos
  return jsonfile
}


module.exports = {
  saveContract,
  getContractList,
  readJSON
}



