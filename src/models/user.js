const mongoose = require('../database');

const Userschema = new mongoose.Schema({
    'nome' : {
        'type': 'string',
        'required': true
    },
    'email' : {
        'type': 'string',
        'required': true
    },
    'senha' : {
        'type': 'string',
        'required': true
    }
});

const Users = mongoose.model('Users', Userschema);

module.exports = Users;