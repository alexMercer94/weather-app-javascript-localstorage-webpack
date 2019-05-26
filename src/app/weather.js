export class Weather {
    constructor(city, countryCode) {
        this.apiKey = 'a7653a205038707f13f20764a49db70a';
        this.city = city;
        this.countryCode = countryCode;
    }

    /**
     * Consult weather service to get weather of a city
     */
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${
            this.apiKey
        }&units=metric`;

        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    /**
     * Change location to consulting weather service
     * @param {*} city Name of the city to consult
     * @param {*} countryCode Country code to consult
     */
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}
