const mongoose = require('../database');

const DepoimentoSchema = new mongoose.Schema({
    'nome' : {
        'type': 'string',
        'required': true
    },
    'foto' : {
        'type': 'string',
        'required': false
    },
    'depoimento' : {
        'type': 'string',
        'required': true
    },
    'status' : {
        'type': 'string',
        'required': true
    }
});

const Depoimentos = mongoose.model('Depoimentos', DepoimentoSchema);

module.exports = Depoimentos;