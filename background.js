const body = document.querySelector("body");

const IMG_NUMBER = 3;

function genRanNum(){
    return Math.floor(Math.random() * 3);
}

function paintImage(number){
    const image = new Image();
    image.src = `/images/${number + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function init(){
    const randomNum = genRanNum();
    paintImage(randomNum);
}

init();