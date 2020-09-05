const mongoose = require('../database');

const SolicitacaoSchema = new mongoose.Schema({
    'descricao' : {
        'type': 'string',
        'required': true
    },
    'codigoCarro' : {
        'type': 'string',
        'required': false
    },
    'dataInicio': {
        'type': Date,
        'required': false
    },
    'dataTermino': {
        'type': Date,
        'required': false
    },
    'status': {
        'type': 'string',
        'required': true
    },
    'pecas' : [{
        'codigoPeca': {
            'type': 'string',
            'required': false
        },
        'quantidadeUtilizada' : {
            'type': 'string',
            'required': false
        }
    }

    ]
});

const Solicitacaos = mongoose.model('Solicitacaos', SolicitacaoSchema);

module.exports = Solicitacaos;