const UserSchema = require('../models/user');
const PilotoSchema = require('../models/pilot');
const jwt = require('../utils/jwt.util');
var md5 = require('md5');
var response;

module.exports.loginAdm = async (req, res) => {

    try {
        
        const login = await UserSchema.findOne({
            email: req.body.email,
            senha: md5(req.body.senha)
        });

        if (login) {

            response = {
                'nome': login.nome,
                'tipo': 'ADM',
                'token': jwt.create(login._id)
            };

        } else {
            response = null;
            res.status(403);
        }

    } catch(err) {
        response = err;
        res.status(400);
    }

    res.send(response);

}

module.exports.loginPiloto = async (req, res) => {

    try {
        
        const login = await PilotoSchema.findOne({
            email: req.body.email,
            senha: md5(req.body.senha)
        });

        if (login) {
            response = {
                'nome': login.nome,
                'tipo': 'PILOTO',
                'token': jwt.create(login._id)
            };
        } else {
            response = null;
            res.status(403);
        }

    } catch(err) {
        response = err;
        res.status(400);
    }

    res.send(response);

}

module.exports.saveUser = async (req, res) => {

    try {

        if (req.body) {
            req.body.senha = md5(req.body.senha);
            const newUser = await UserSchema.create(req.body);
            return res.send({
                'nome': newUser.nome,
                'token': jwt.create(newUser._id)
            });
        } else {
            res.status(400).send(err);
        }

    } catch(err) {
        console.log(err);
        return res.status(400).send(err);
    }

} 