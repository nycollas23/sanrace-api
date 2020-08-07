const PilotSchema = require('../models/pilot');
var md5 = require('md5');
var response;

module.exports.createPilot = async (req, res) => {

    req.body.senha = md5(req.body.senha);
    var piloto = new PilotSchema(req.body)

    try {
        piloto.save((err, doc) => {
            if (err) {
                res.send(err);
            } else {
                res.send(piloto);
            }
        });
    } catch(err) {
        res.status(400).send(err);
    }

}

module.exports.update = async (req, res) => {

    req.body.senha = md5(req.body.senha);
    var piloto = await PilotSchema.findOne({'_id': req.body._id});

    try {
        piloto.overwrite(req.body);
        piloto.save((err, docUpdate) => {
            res.send({
                'id': docUpdate._id
            });
        });

    } catch(err) {
        res.status(400).send(err);
    }

}

module.exports.find = async (req, res) => {

    try {
        const findPilot = await PilotSchema.find({}).sort({ nome: 1 });;
        response = findPilot;
    } catch (err) {
        response = err;
        res.status(400);
    }

    res.send(response);
}

module.exports.findOnePilot = async (req, res) => {

    try {
        const findPilot = await PilotSchema.findById(req.params._id);
        response = findPilot;
    } catch (err) {
        response = err;
        res.status(400);
    }

    res.send(response);

}

module.exports.delete = async (req, res) => {
    try {
        const findPilot = await PilotSchema.deleteOne(req.params.id).remove().exec();
        response = findPilot;
    } catch (err) {
        response = err;
        res.status(400);
    }

    res.send(response);
}