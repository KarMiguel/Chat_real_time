const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Carregar rotas, modelos e controladores
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
