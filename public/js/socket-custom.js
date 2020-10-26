var socket = io();

// ON es para escuchar 
socket.on('connect', function() {

    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conecion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});