const key = "fa44fade42e33bd2078692e794c4c387"

function dataInsert(data) {

    console.log(data)
    document.querySelector('.weather-city').innerHTML = data.name;
    document.querySelector('.tempp').innerHTML = data.main.temp.toFixed(1)
    document.querySelector('.feelslike').innerHTML = data.main.feels_like.toFixed(1)
    document.querySelector('.weather-category').innerHTML = data.weather[0].description
    document.querySelector('.umidd').innerHTML = data.main.humidity.toFixed(1)
    document.querySelector('.press').innerHTML = data.main.pressure
    document.querySelector('.speed').innerHTML = data.wind.speed
    document.querySelector('.img-forecast').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function citySearch(cityLat, cityLong) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    dataInsert(data)
    
    console.log(data)
}

function buttonClick() {
    const cityLat = document.querySelector('.input-lat').value;
    const cityLong = document.querySelector('.input-long').value;
    citySearch(cityLat, cityLong)
    document.querySelector('.input-lat').value = '';
    document.querySelector('.input-long').value = '';

}