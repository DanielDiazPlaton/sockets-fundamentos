const express = require('express');

const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacnion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');
// Esto permite saber si existe una conexion con el servidor






server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor conectado en puerto ${ port }`);

});