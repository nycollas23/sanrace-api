const CampeonatoSchema = require('../models/campeonato');
var response;

module.exports.create = async (req, res) => {

    try {
        const newReg = await CampeonatoSchema.create(req.body);
        return res.send(newReg);

    } catch(err) {
        return res.status(400).send(err);
    }

}

module.exports.update = async (req, res) => {

    var update = await CampeonatoSchema.findOne({'_id': req.body._id});

    try {
        update.overwrite(req.body);
        update.save((err, docUpdate) => {
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
        const find = await CampeonatoSchema.find({});
        response = find;
    } catch (err) {
        console.log(err);
        response = err;
        res.status(400);
    }

    res.send(response);
}

module.exports.findOne = async (req, res) => {

    try {
        const find = await CampeonatoSchema.findById(req.params.id);
        response = find;
    } catch (err) {
        response = err;
        res.status(400);
    }

    res.send(response);

}

module.exports.delete = async (req, res) => {
    try {
        const find = await CampeonatoSchema.deleteOne(req.params.id);
        response = find;
    } catch (err) {
        response = err;
        res.status(400);
    }

    res.send(response);
}