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