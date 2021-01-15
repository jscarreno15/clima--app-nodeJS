const axios = require('axios');


const getLugarLatLng = async(dir) => { //para usar el await la funcion debe ser async

    //.log(argv.direccion); // imprime la direccion que ingresemos despues del -d

    const encodeUrl = encodeURI(dir); // en este caso , este metodo de javascript convierte cualquier caracter especial que fueramos a ingresar


    const instance = axios.create({ //se crea una instancia para colocar el URL donde hacemos la peticion
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`, //url
        headers: { 'x-rapidapi-key': '84ab22e3f5mshc9017ca46115cbcp156d04jsndb0d8ecb232e' } //Como este url funciona con headers los declaramos aqui
    });


    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error('no hay resultados para esta busqueda');
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}