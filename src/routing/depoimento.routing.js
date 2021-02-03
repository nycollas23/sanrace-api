const express = require('express');
const depoimento = require('../controller/depoimento.controller');
const jwt = require('../middleware/jwt-auth');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    if (req.body._id) {
        depoimento.update(req, res); 
    } else {
        depoimento.create(req, res);
    }
});

router.get('/', (req, res) => {
    depoimento.find(req, res);
});

router.get('/detail/:id', (req, res) => {
    depoimento.findOne(req, res);
});

router.post('/remove', (req, res) => {
    depoimento.delete(req, res);
});

module.exports = app => app.use('/depoimento', router);