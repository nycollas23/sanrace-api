const express = require('express');
const dashboard = require('../controller/dashboard.controller');
const jwt = require('../middleware/jwt-auth');
const router = express.Router();

router.use(jwt)

router.get('/', (req, res) => {
    dashboard.getInformation(req, res);
});

module.exports = app => app.use('/dashboard', router);