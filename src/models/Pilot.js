const mongoose = require('../database');

const Pilotchema = new mongoose.Schema({
    'id': {
        'type': mongoose.Schema.Types.ObjectId
    },
    'nome' : {
        'type': 'string',
        'required': true
    }
});

const Pilots = mongoose.model('Pilots', Pilotchema);

module.exports = Pilots;