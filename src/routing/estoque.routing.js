const express = require('express');
const estoque = require('../controller/estoque.controller');
const jwt = require('../middleware/jwt-auth');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    if (req.body._id) {
        estoque.update(req, res); 
    } else {
        estoque.create(req, res);
    }
});

router.get('/', (req, res) => {
    estoque.find(req, res);
});

router.post('/remove', (req, res) => {
    estoque.delete(req, res);
});

module.exports = app => app.use('/estoque', router);