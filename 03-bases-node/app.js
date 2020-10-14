    const colors = require('colors');
    const argv = require('./config/yargs').argv;
    const { crearArchivo } = require('./multiplicar/multiplicar');
    const { listarTabla } = require('./multiplicar/multiplicar');



    //console.log(process.argv);
    // let argv2 = process.argv;
    // let parametro = argv[2];
    // let base = parametro.split('=')[1];
    console.log('base', argv.base);
    console.log('limite', argv.limite);
    // console.log('arvgv', argv);

    let comando = argv._[0];

    switch (comando) {
        case 'listar':

            listarTabla(argv.base, argv.limite);

            break;

        case 'crear':

            crearArchivo(argv.base, argv.limite)
                .then(archivo => console.log('El archivo:'.green + `${archivo}`.yellow + ' ha sido creado'.green))
                .catch(err => console.log(err));
            break;

        default:
            console.log('comando no reconocido');
            break;
    }