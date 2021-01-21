const express = require('express');
const depoimento = require('../controller/depoimento-site.controller');
const router = express.Router();

router.get('/', (req, res) => {
    depoimento.find(req, res);
});

module.exports = app => app.use('/dep', router);