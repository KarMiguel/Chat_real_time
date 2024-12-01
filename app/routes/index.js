module.exports = (application) => {
  application.get('/', (req, res) => {
    try {
      if (!application.app || !application.app.controllers || !application.app.controllers.indexControllers) {
        throw new Error('Controllers não foram carregados corretamente.');
      }
      application.app.controllers.indexControllers.home(application, req, res);
    } catch (error) {
      console.error('Erro ao processar requisição GET /:', error.message);
      res.status(500).send('Erro interno ao processar a requisição.');
    }
  });
};
