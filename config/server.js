const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// Middlewares
app.use(express.static(path.join(__dirname, '../app/public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar e carregar rotas e controladores (sem 'models', já que a pasta não existe)
consign({ cwd: path.join(__dirname, '../app') })
  .include('routes')
  .then('controllers')
  .into(app);

// Exporta o servidor configurado
module.exports = app;
