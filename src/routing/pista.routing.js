
const express = require('express');
const jwt = require('../middleware/jwt-auth');
const pista = require('../controller/pista.controller');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    if (req.body._id) {
        pista.update(req, res); 
    } else {
        pista.create(req, res);
    }
});

router.get('/', (req, res) => {
    pista.find(req, res);
});

router.get('/detail/:id', (req, res) => {
    pista.findOne(req, res);
});

router.post('/remove/:id', (req, res) => {
    pista.delete(req, res);
});

module.exports = app => app.use('/pista', router);