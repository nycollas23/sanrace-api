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