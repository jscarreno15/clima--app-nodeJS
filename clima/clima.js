const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=880bf371ba7cb18e8f5d2264367ca84b&units=metric`);

    return resp.data.main.temp;

}

module.exports = {

    getClima
}