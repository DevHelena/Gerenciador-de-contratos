const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

let contractList = []

function saveContract(contrato) {
    contractList = getContractList()
    contrato.key = uuidv4()
    contractList.push(contrato)
    const contractsJSON = JSON.stringify(contractList, null, 2)
    fs.writeFileSync('contratos.json', contractsJSON, 'utf8')
    return contrato.key
}

function getContractList() {
    try {
        const data = fs.readFileSync('contratos.json', 'utf8')
        const contracts = JSON.parse(data)
        return contracts
    } catch (err) {
        console.error(err)
        return []
    }
}

module.exports = {
    saveContract,
    getContractList,
}



