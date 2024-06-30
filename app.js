const app = require('./config/server');
const http = require('http');
const server = http.createServer(app); // Create an HTTP server instance

server.listen(80, () => {
    console.log('Servidor online');
});

const io = require('socket.io')(server); // Initialize socket.io with the server instance

// Optional: Handle socket connections
io.on('connection', (socket) => {
    console.log('Novo usuário conectado');

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});
