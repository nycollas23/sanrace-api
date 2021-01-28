const express = require('express');
const depoimento = require('../controller/depoimento-site.controller');
const router = express.Router();
const optionsMiddleWare = require('../middleware/options-middle');

router.use(optionsMiddleWare);

router.get('/', (req, res) => {
    depoimento.find(req, res);
});

router.post('/novo', (req, res) => {
    depoimento.create(req, res);
});

router.post('/foto/:id', async (req, res) => {
    req.body.foto = "data:image/png;base64," + Buffer.from(req.file.buffer).toString('base64');
    depoimento.updateFoto(req, res);
});

module.exports = app => app.use('/dep', router);