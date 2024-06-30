module.exports.iniciaChat = (application, req, res) => {
    try {
        res.render('chat');
    } catch (error) {
        console.error('Erro ao renderizar página de chat:', error);
        res.status(500).send('Erro interno ao iniciar o chat.');
    }
};