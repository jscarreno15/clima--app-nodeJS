//peticiones HTTP

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({ // comandos directamente en la raiz de la aplicacion, antes poniamos node app crear ,ahora node -d "hola"
    direccion: {
        alias: 'd',
        desc: 'direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(-31.416666666, -64.183333333)
//   .then(console.log)
// .catch(console.log)

const getInfo = async(direccion) => {

    try {
        var city = await lugar.getLugarLatLng(direccion);
        var temp = await clima.getClima(city.lat, city.lng);
        return console.log(`el clima de ${city.direccion} es de ${temp}`);

    } catch (error) {

        return `no se pudo determinar el clima de ${ direccion}`
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)