require('./index.css');
require('../assets/css/bootstrap.min.css');
const { Weather } = require('./weather');

const weather = new Weather('London', 'uk');

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);
