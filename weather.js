class Weather {
    constructor(city) {
        this.apikey = 'F5oiKOuv8nJyat33kjR7bJhWckYF7vrD';
        this.city = city;
    }

    // get weather information
    async getWeather(id) {
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${id}?apikey=${this.apikey}`;
        const response = await fetch(base + query);
        const data = await response.json();
        return data[0];
    }

    // get city information
    async getCity() {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${this.apikey}&q=${this.city}`;
        const response = await fetch(base + query);
        const data = await response.json();
        return data[0];
    }

    // change location
    changeCity(city) {
        this.city = city;
    }

}