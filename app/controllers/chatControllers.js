module.exports.iniciaChat = (application, req, res) => {
    try {
        let dadosForm = req.body;
        application.get('io').emit(
            'msgParaCliente',
            {
                apelido: dadosForm.apelido,
                mensagem: 'acabou de entrar no chat'
            }
        );
        res.render('chat', { dadosForm: dadosForm });
    } catch (error) {
        console.error('Erro ao renderizar página de chat:', error);
        res.status(500).send('Erro interno ao iniciar o chat.');
    }
};
