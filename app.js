// Imports
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.listen('3000');
require('./src/routing/pilot-routing')(app);
require('./src/routing/auth.routing')(app);
require('./src/routing/user.routing')(app);
require('./src/routing/campeonato.routing')(app);
require('./src/routing/dashboard.routing')(app);
require('./src/routing/estoque.routing')(app);

console.info('Servidor Iniciando em 3000');