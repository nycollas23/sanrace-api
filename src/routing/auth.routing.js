const express = require('express');
const authController = require('../controller/auth.controller');
const router = express.Router();
const optionsMiddleWare = require('../middleware/options-middle');

router.use(optionsMiddleWare)

router.post('/adm', (req, res) => {
    authController.loginAdm(req, res);
});

router.post('/piloto', (req, res) => {
    authController.loginPiloto(req, res);
});

module.exports = app => app.use('/login', router);