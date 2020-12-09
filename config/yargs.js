const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea pendiente'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como pendiente o completado la tarea'
};


const argv = require("yargs")
    .command('crear', 'Crea una tarea pendiente', {
        descripcion
    })

.command('actualizar', 'Crea una tarea pendiente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea pendiente', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}