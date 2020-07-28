const mongoose = require('../database');

const PistaSchema = new mongoose.Schema({
    'nome' : {
        'type': 'string',
        'required': true
    },
    'local': {
        'type': 'string',
    },
    'quantidadeSetores' : {
        'type': 'number',
    },
    'imagemPista': {
        'type': 'string',
        'required': true
    }
});

const Pistas = mongoose.model('Pistas', PistaSchema);

module.exports = Pistas;