
const express = require('express');
const jwt = require('../middleware/jwt-auth');
const campeonato = require('../controller/campeonato.controller');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    if (req.body._id) {
        campeonato.update(req, res); 
    } else {
        campeonato.create(req, res);
    }
});

router.get('/', (req, res) => {
    campeonato.find(req, res);
});

router.get('/detail/:id', (req, res) => {
    campeonato.findOne(req, res);
});

router.post('/remove/:id', (req, res) => {
    campeonato.delete(req, res);
});

module.exports = app => app.use('/campeonato', router);