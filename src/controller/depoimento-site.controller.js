const DepoimentoSchema = require('../models/depoimento');
var response;

module.exports.find = async (req, res) => {

    try {
        const find = await DepoimentoSchema.find({'status': 'OK'}).sort({ nome: 1 });
        response = find;
    } catch (err) {
        console.log(err);
        response = err;
        res.status(400);
    }

    res.send(response);
}

module.exports.create = async (req, res) => {

    try {
        req.body.status = 'NOK';
        const newReg = await DepoimentoSchema.create(req.body);
        return res.send(newReg);

    } catch(err) {
        return res.status(400).send(err);
    }

}

module.exports.updateFoto = async (req, res) => {

    var update = await DepoimentoSchema.findOne({'_id': req.params.id});

    try {
        update.foto = req.body.foto;
        update.save((err, docUpdate) => {
            res.send({
                'id': docUpdate._id
            });
        });

    } catch(err) {
        res.status(400).send(err);
    }

}