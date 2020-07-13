const mongoose = require('../database');

const PilotoSchema = new mongoose.Schema({
    'nome' : {
        'type': 'string',
        'required': true
    },
    'email': {
        'type': 'string',
        'required': true
    },
    'senha' : {
        'type': 'string',
        'select': false,
        'required': true
    },
    'campeonatos' : [],
    'classificacao': [
        {
            'campeonatoId': {
                'type': 'string'
            },
            'campeonatoNome': {
                'type': 'string'
            },
            'posicao': {
                'type': 'number'
            },
            'pontos': {
                'type': 'number'
            }
        }
    ],
    'carro': {
        'numero' : {
            'type': 'string',
        },
        'status' : {
            'type': 'string',
        },
    },
    'conquistas': []
});

const Pilotos = mongoose.model('Pilotos', PilotoSchema);

module.exports = Pilotos;