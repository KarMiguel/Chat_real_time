module.exports = (application) => {
   
    application.get('/', (req, res) => {
        try {
            application.app.controllers.indexControllers.home(application, req, res);
        } catch (error) {
            console.error('Erro ao processar requisição GET /:', error);
            res.status(500).send('Erro interno ao processar a requisição.');
        }
    });
};