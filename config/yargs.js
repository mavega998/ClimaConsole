const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};