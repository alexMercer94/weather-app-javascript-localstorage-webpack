/**
 * Class in order to manipulate DOM
 */

export class UI {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    /**
     * Get data from service to assing the elements
     * @param {*} watherData Weather's data from servie
     */
    render(watherData) {
        this.location.textContent = watherData.name + ' / ' + watherData.sys.country;
        this.desc.textContent = watherData.weather[0]['description'];
        this.string.textContent = watherData.main.temp + ' °C';
        this.humidity.textContent = `Humidity: ${watherData.main.humidity} %`;
        this.wind.textContent = `Wind: ${watherData.wind.speed} m/s`;
    }
}
