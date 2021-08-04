const zipBox = document.getElementById("zipBox")
const submitButton = document.getElementById("submitButton")
const weatherUL = document.getElementById("weatherUL")
const getLocationButton = document.getElementById("getLocationButton")

getLocationButton.addEventListener('click', function(){
    getLocation(function(position){
        console.log(position.coords);
        getWeatherGeo(position.coords.latitude, position.coords.longitude)
        displayWeatherGeo(getLocation(position))
    })
    
    
})



function getLocation(sucess){
    if (!navigator.geolocation) {
        console.log('Geolocation Not supported');
    } else {
        console.log('Checking Location');
        navigator.geolocation.getCurrentPosition(sucess, error);
        
    }
}

// function sucess(position){
//     const lat = position.coords.latitude
//     const lon = position.coords.longitude
//     console.log(lat);
//     console.log(lon);
//     myCoords.lat = position.coords.latitude
//     myCoords.lon = position.coords.longitude
// }

function error(){
    console.log('Goelocation error!');
}

function getWeatherGeo(latitude, longitude){
    
    const GET_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=5c35e792a43776462a9fef71e50aebc0`

    console.log(GET_WEATHER_URL);
    fetch(GET_WEATHER_URL)
    .then(responce => {
        return responce.json()
    })
    .then(result => {
        console.log(result);
    })
}

function getWeather(weatherDownloaded){
    const zipCode = zipBox.value
    const GET_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=5c35e792a43776462a9fef71e50aebc0`

    console.log(GET_WEATHER_URL);
    fetch(GET_WEATHER_URL)
    .then(responce => {
        return responce.json()
    })
    .then(result => {
        weatherDownloaded(result)
    })
}

submitButton.addEventListener('click', function(){
    getWeather((weather)=> {
        displayWeather(weather)
    })
})

function displayWeather(weather){
        const cityName = weather.name
        const temp = weather.main
        const actTemp = temp.temp
        const maxTemp = temp.temp_max
        const minTemp = temp.temp_min
        const pressure = temp.pressure
    const weatherLI =`
        <li>${cityName}</li>
        <li>${actTemp}</li>
        <li>${maxTemp}</li>
        <li>${minTemp}</li>
        <li>${pressure}</li>
        `
    weatherUL.innerHTML = weatherLI



}

function displayWeatherGeo(position){
    // const cityName = position.name
    console.log(position.name);
    // const temp = position.main.temp
    // const actTemp = position.main.temp
    // const maxTemp = position.main.temp_max
    // const minTemp = position.main.temp_min
    // const pressure = position.main.pressure
// const weatherLI =`
//     <li>${cityName}</li>
//     <li>${actTemp}</li>
//     <li>${maxTemp}</li>
//     <li>${minTemp}</li>
//     <li>${pressure}</li>
//     `
// weatherUL.innerHTML = weatherLI



}



