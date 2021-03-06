
const express = require('express');
const jwt = require('../middleware/jwt-auth');
const pilot = require('../controller/pilot.controller');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    if (req.body._id) {
        pilot.update(req, res); 
    } else {
        pilot.createPilot(req, res); 
    }
});

router.get('/', (req, res) => {
    pilot.find(req, res);
});

router.get('/detail/:id', (req, res) => {
    pilot.findOnePilot(req, res);
});

router.post('/remove/:id', (req, res) => {
    pilot.delete(req, res);
});

module.exports = app => app.use('/piloto', router);