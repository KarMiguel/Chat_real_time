module.exports = (application) => {
    application.post('/chat', (req, res) => {
        try {
            application.app.controllers.chatControllers.iniciaChat(application, req, res);
        } catch (error) {
            console.error('Erro ao processar requisição POST /chat:', error);
            res.status(500).send('Erro interno ao processar a requisição.');
        }
    });

  
    application.get('/chat', (req, res) => {
        try {
            application.app.controllers.chatControllers.iniciaChat(application, req, res);
        } catch (error) {
            console.error('Erro ao processar requisição GET /chat:', error);
            res.status(500).send('Erro interno ao processar a requisição.');
        }
    });
};