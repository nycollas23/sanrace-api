const express = require('express');
const jwt = require('../middleware/jwt-auth');
const authController = require('../controller/auth.controller');
const router = express.Router();

router.use(jwt)

router.post('/save', (req, res) => {
    authController.saveUser(req, res);
});

module.exports = app => app.use('/user', router);