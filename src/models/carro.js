const mongoose = require('../database');

const CarroSchema = new mongoose.Schema({
    'descricao' : {
        'type': 'string',
        'required': true
    },
    'categoria': {
        'type': 'string',
    },
    'motor' : {
        'type': 'number',
    }
});

const Carros = mongoose.model('Carros', CarroSchema);

module.exports = Carros;