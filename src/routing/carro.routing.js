const express = require('express');
const carro = require('../controller/carro.controller');
const jwt = require('../middleware/jwt-auth');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    if (req.body._id) {
        carro.update(req, res); 
    } else {
        carro.create(req, res);
    }
});

router.get('/', (req, res) => {
    carro.find(req, res);
});

router.post('/remove', (req, res) => {
    carro.delete(req, res);
});

module.exports = app => app.use('/carro', router);