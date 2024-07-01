const app = require('./config/server');
const http = require('http');
const server = http.createServer(app); // Create an HTTP server instance

server.listen(80, () => {
    console.log('Servidor online');
});

const io = require('socket.io')(server); // Initialize socket.io with the server instance

app.set('io',io);

io.on('connection', (socket) => {
    console.log('Novo usuário conectado');

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
    socket.on('msgParaServidor',(data)=>{
        //dialogo
        socket.emit(
            'msgParaCliente',
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        )
        socket.broadcast.emit(
            'msgParaCliente',
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        )


      	/* participantes */
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
			socket.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);

			socket.broadcast.emit(
				'participantesParaCliente', 
				{apelido: data.apelido}
			);
		}
    });   
});
