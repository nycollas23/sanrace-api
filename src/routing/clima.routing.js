const express = require('express');
const clima = require('../controller/clima.controller');
const jwt = require('../middleware/jwt-auth');
const router = express.Router();

router.use(jwt)

router.get('/', (req, res) => {
    clima.getClima(req, res);
});


module.exports = app => app.use('/clima', router);