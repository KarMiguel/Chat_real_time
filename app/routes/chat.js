module.exports = (app) => {
    app.get('/chat', (req, res) => {
      try {
        const controllers = require('../controllers/chatControllers');
        controllers.iniciaChat(app, req, res);
      } catch (error) {
        console.error('Erro ao processar requisição GET /chat:', error.message);
        res.status(500).send('Erro interno ao processar a requisição.');
      }
    });
  };
  