const path = require('path');
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views')); // Caminho absoluto para views

// Middlewares
app.use(express.static(path.join(__dirname, '../app/public'))); // Caminho absoluto para public
app.use(bodyParser.urlencoded({ extended: false }));

// Carregar rotas, modelos e controladores
consign({ cwd: path.join(__dirname, '../app') })
  .include('routes')
  .then('models')
  .then('controllers')
  .into(app)
  .on('error', (err) => {
    console.error('Erro ao carregar arquivos com consign:', err);
  });

console.log('Estrutura do objeto application:', app);


// Exportar o servidor
module.exports = app;
