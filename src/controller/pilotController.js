const PilotSchema = require('../models/Pilot');
var response;

module.exports.createPilot = async (req, res) => {

    try {
        const newPilot = await PilotSchema.create(req.body);
        return res.send(newPilot);

    } catch(err) {
        return res.status(400).send(err);
    }

}

module.exports.find = async (req, res) => {
    try {
        const findPilot = await PilotSchema.find({});
        response = findPilot;
    } catch (err) {
        response = err;
        res.status(400);
    }

    res.send(response);
}

module.exports.findOnePilot = async (req, res) => {

    try {
        const findPilot = await PilotSchema.findById(req.params.id);
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