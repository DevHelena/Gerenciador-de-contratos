const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
    key: String,
    tipo: String,
    contratante: {
        PessoaJurídica: String,
        CNPJ: String,
        Endereço: {
            Rua: String,
            Número: String,
            Cidade: String, 
            Estado: String
        }
    },
    contratado: { 
        PessoaJurídica: String,
        CNPJ: String,
        Endereço: {
            Rua: String,
            Número: String,
            Cidade: String, 
            Estado: String
        }
    },
    financeiro: { 
        carência: String,
        Vigência: {
            unidade: String,
            periodo: String
        },
        Valores: String,
        Prazos: String,
    },
    status: String,
    descrição: String
});

module.exports = mongoose.model('Contrato', contratoSchema);
