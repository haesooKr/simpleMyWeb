const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector('h1');

function getTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}

init();