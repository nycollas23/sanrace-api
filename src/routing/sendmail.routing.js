const express = require('express');
const mailController = require('../controller/sendmail.controller');
const router = express.Router();
const optionsMiddleWare = require('../middleware/options-middle');

router.use(optionsMiddleWare);

router.post('/', (req, res) => {
    mailController.send(req, res);
});

module.exports = app => app.use('/mail', router);