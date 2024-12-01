const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Importação manual das rotas
const indexRoutes = require('../app/routes/index');
const chatRoutes = require('../app/routes/chat');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// Middlewares
app.use(express.static(path.join(__dirname, '../app/public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Registrar rotas manualmente
indexRoutes(app);
chatRoutes(app);

// Exportar aplicativo configurado
module.exports = app;
