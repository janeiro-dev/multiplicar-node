const configuracion = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla demultiplicar', configuracion)
    .command('crear', 'Crear archivo de tabla de multiplicar', configuracion)
    .help()
    .argv;


module.exports = {
    argv
}