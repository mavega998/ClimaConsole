const { argv } = require('./config/yargs');
const { getLatLng } = require('./place/devrull');
const { getClima } = require('./place/weather');

// getLatLng(argv.direccion)
//     .then(resp => {
//         return getClima(resp.lat, resp.lng);
//     })
//     .then(resp => console.log(resp))
//     .catch(err => console.log("Error", err));

const getInfo = async(direccion) => {
    try {
        const geolokt = await getLatLng(direccion);
        const weather = await getClima(geolokt.lat, geolokt.lng);
        return `El clima de ${direccion} es de ${weather}°C.`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);