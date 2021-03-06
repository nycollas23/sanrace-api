const mongoose = require('../database');

const CampeonatoSchema = new mongoose.Schema({
    'nome' : {
        'type': 'string',
        'required': true
    },
    'sigla' : {
        'type': 'string',
        'required': false
    },
	'classificacaoPiloto': {
		'posicao': {
			'type': 'string'
		},
		'pontos': {
			'type': 'number'
		},
	},
    'classificacao': [
        {
			'idPiloto': {
                'type': 'string'
            },
            'posicao': {
                'type': 'number'
            },
            'nome': {
                'type': 'string'
            },
            'pontos': {
                'type': 'number'
            }
        }
    ],
    'etapas': [
        {
            'pistaId': {
                'type': 'string',
            },
            'numeroEtapa': {
                'type': 'number'
            },
            'dataInicio': {
                'type': Date
            },
            'ativa': {
                'type': 'boolean'
            },
            'sessoes': [
                {
                    'tipo': {
                        'type': 'string'
                    },

                    'data': {
                        'type': Date
                    }
                }
            ]
        }
    ]
});

const Campeonatos = mongoose.model('Campeonatos', CampeonatoSchema);

module.exports = Campeonatos;