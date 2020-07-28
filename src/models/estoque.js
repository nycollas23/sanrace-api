const mongoose = require('../database');

const EstoqueSchema = new mongoose.Schema({
    'nome' : {
        'type': 'string',
        'required': true
    },
    'quantidade' : {
        'type': 'string',
        'required': true
    }
});

const Estoques = mongoose.model('Estoques', EstoqueSchema);

module.exports = Estoques;