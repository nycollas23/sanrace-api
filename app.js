// Imports
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.listen('3000');
require('./src/routing/pilot-routing')(app);

console.info('Servidor Iniciando em 3000');