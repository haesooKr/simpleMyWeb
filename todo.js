const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(e){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const updatedToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    })
    toDos = updatedToDos
    saveToDos();
}

function addToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener('click', deleteToDo)
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    addToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            addToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();