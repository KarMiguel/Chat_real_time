module.exports = (app) => {
    app.get('/', (req, res) => {
      try {
        const controllers = require('../controllers/indexControllers');
        controllers.home(app, req, res);
      } catch (error) {
        console.error('Erro ao processar requisição GET /:', error.message);
        res.status(500).send('Erro interno ao processar a requisição.');
      }
    });
  };
  