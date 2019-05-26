require('./index.css');
require('../assets/css/bootstrap.min.css');
const { Weather } = require('./weather');
const { UI } = require('./UI');
const { Store } = require('./store');

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

/**
 * Consult weather service to get data
 */
async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
}

document.getElementById('btn-change-w').addEventListener('click', e => {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;

    store.setLocationData(city, countryCode);
    weather.changeLocation(city, countryCode);
    fetchWeather();
});

document.addEventListener('DOMContentLoaded', fetchWeather);
