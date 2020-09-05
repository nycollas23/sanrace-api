
const express = require('express');
const jwt = require('../middleware/jwt-auth');
const solicitacao = require('../controller/solicitacao.controller');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    if (req.body._id) {
        solicitacao.update(req, res); 
    } else {
        solicitacao.create(req, res);
    }
});

router.get('/', (req, res) => {
    solicitacao.find(req, res);
});

router.get('/detail/:id', (req, res) => {
    solicitacao.findOne(req, res);
});

router.post('/remove/:id', (req, res) => {
    solicitacao.delete(req, res);
});

module.exports = app => app.use('/solicitacao', router);