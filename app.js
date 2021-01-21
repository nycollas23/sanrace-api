// Imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT_SANRACE_API_APP || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port);

app.use(function (req, res, next) {
    req.url = req.url.replace('//','/');
    next();
});

require('./src/routing/pilot-routing')(app);
require('./src/routing/auth.routing')(app);
require('./src/routing/user.routing')(app);
require('./src/routing/campeonato.routing')(app);
require('./src/routing/dashboard.routing')(app);
require('./src/routing/pista.routing')(app);
require('./src/routing/estoque.routing')(app);
require('./src/routing/solicitacao.routing')(app);
require('./src/routing/sendmail.routing')(app);
require('./src/routing/depoimento.routing')(app);
require('./src/routing/depoimento-site.routing')(app);
//require('./src/routing/clima.routing')(app);
// require('./src/routing/carro.routing')(app);

console.info('Servidor Iniciando em '+port);