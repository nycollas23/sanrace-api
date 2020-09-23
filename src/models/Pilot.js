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
    'campeonatos' : [
        {
            'codigo': {
                'type': 'string'
            },
            'nome': {
                'type': 'string'
            }
        }
    ],
    'categorias': [
        
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
