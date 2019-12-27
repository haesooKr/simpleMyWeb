const weather = document.querySelector(".js-weather");
console.log(weather);

const COORDS = 'coords';
const API_KEY = "ea6f69a96da7159d3a1bffea7f43846a"

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)
    .then(function(response){
        return (response.json());
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}° in ${place}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const {latitude, longitude} = position.coords
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWehater(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geolocation!")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();