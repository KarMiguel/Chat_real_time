const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Carregar rotas, modelos e controladores
consign()
  .include('./app/routes')
  .then('./app/models')
  .then('./app/controllers')
  .into(app);

// Exportar aplicativo
module.exports = app;
