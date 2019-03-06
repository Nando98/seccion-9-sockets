var socket = io();

// on() -> Escucha evento de conección cliente
socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexión con el servidor');
});

// emit() -> Permite enviar información al servidor de forma privada
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo!'
}, function(resp) {
    console.log('Respuesta del server', resp);
});


socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor', mensaje);
});