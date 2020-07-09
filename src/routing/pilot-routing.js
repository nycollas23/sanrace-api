
const express = require('express');
const jwt = require('../middleware/jwt-auth');
const pilot = require('../controller/pilotController');
const router = express.Router();

router.use(jwt)

router.post('/', (req, res) => {
    pilot.createPilot(req, res);
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

module.exports = app => app.use('/pilot', router);