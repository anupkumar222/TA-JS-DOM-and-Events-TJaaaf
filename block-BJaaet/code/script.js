function todo() {
let inputText = document.querySelector("#text");
let root = document.querySelector("ul");

let allTodos = [];

function handleInput(event) {
    let value = event.target.value;
    
    if(event.keyCode === 13 && value !== "") {
        let todo = {
            name: value,
            isDone: false,
        };
        allTodos.push(todo);
        event.target.value = "";

        createUI(allTodos, root);
    }
}
    

function handleDelete(event) {
let id = event.target.dataset.id;
allTodos.splice(id, 1);
createUI(allTodos, root);
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;

    createUI(allTodos, root); 
}

function createUI(data, rootElm) {
    rootElm.innerHTML = "";
    data.forEach((todo, index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("input", handleToggle)
        input.checked = todo.isDone;
        input.setAttribute("data-id", index);
        let span = document.createElement("span");
        span.innerText = todo.name;
        let button = document.createElement("button");
        button.innerText = "x";
        button.setAttribute("data-id", index);
        button.addEventListener('click', handleDelete);
    
        li.append(input, span, button);
        root.append(li);
    })
  

}

inputText.addEventListener("keyup", handleInput);
}
todo();