document.getElementById("TodoSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    addTodo();
}, false);

document.getElementById("TodoList").addEventListener("click", strikeOutItem, false);

function addTodo() {
    let todoNode = document.createElement("li");
    let itemToAdd = document.getElementById("TodoInput").value;
    let newNode = document.createTextNode(itemToAdd);
    todoNode.appendChild(newNode);
    document.getElementById("TodoList").appendChild(todoNode);
    document.getElementById("TodoInput").value = "";
}

function strikeOutItem(event) {
    let clickedItem = event.target;
    clickedItem.classList.toggle('strike');
}