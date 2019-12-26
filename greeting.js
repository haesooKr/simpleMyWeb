const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(e){
    e.preventDefault();
    const currentInput = input.value;
    colorGreeting(currentInput);
    saveName(currentInput);
}

function askName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function colorGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        askName();
    } else{
        colorGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();