const btn = document.getElementById('w-change-btn');
const city = document.getElementById('city');
const alert = document.getElementById('alert');

// init storage
const storage = new LocalStorage();
// get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city);
const ui = new UI();


const getInfoWeather = () => {
    weather.getCity()
        .then(result => {
            return weather.getWeather(result.Key);
        })
        .then(data => {
            console.log(data);
            ui.infoWeather(data);
            return data;
        })
        .catch(err => console.log(err));
};

const getInfoCity = () => {
    weather.getCity()
        .then(result => {
            console.log(result);
            ui.infoCity(result);
        })
        .catch(err => console.log(err));
};


btn.addEventListener('click', (e) => {
    if (city.value === '') {
        alert.style.display = 'block'
        alert.textContent = 'Enter Something';
        setTimeout(()=> {
            alert.style.display = 'none'
        },1500)
        return       
    } else {
        e.preventDefault();
        weather.changeCity(city.value);
        getInfoCity();
        getInfoWeather();
        storage.setLocationData(city.value);
        city.value = '';
        $('#locModal').modal('hide');
    }

});



document.addEventListener("DOMContentLoaded", getInfoCity);
document.addEventListener("DOMContentLoaded", getInfoWeather);



