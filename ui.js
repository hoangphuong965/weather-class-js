class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string_c = document.getElementById('w-string_c');
        this.string_f = document.getElementById('w-string_f');
        this.icon = document.getElementById('w-icon');
    }

    infoCity(weather) {
        this.location.textContent = weather.EnglishName;
    }

    infoWeather(data) {
        this.desc.textContent = data.WeatherText;
        this.string_c.textContent = data.Temperature.Metric.Value;
        this.string_f.textContent = data.Temperature.Imperial.Value;
        const iconSrc = `icons/${data.WeatherIcon}.svg`;
        this.icon.setAttribute('src', iconSrc);
    }

}