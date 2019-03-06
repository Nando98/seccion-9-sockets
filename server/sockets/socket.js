const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado ');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido al grupo'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // on() -> Escucha evento de conección cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // broadcast -> emite los eventos a todos los clientes conectados.
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'LA CSM'
        //     });
        // }
    });
});