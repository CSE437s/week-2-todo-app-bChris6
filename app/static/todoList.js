var currentStatus = "strikeThrough";

document.getElementById("TodoSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    addTodo();
}, false);

document.getElementById("TodoList").addEventListener("click", function(event) {
    if (currentStatus =="strikeThrough") {
        strikeOutItem(event);
    } else if (currentStatus =="delete") {
        deleteItem(event);
    } else {
        alert("Error. Please refresh page");
    }

}, false);

document.getElementById("strikeOrDelete").addEventListener("click", switchMode, false);

function switchMode() {
    var modeButton = document.getElementById("strikeOrDelete");
    if (currentStatus =="strikeThrough") {
        currentStatus = "delete";
        modeButton.textContent = "Delete"
    } else if (currentStatus =="delete") {
        currentStatus = "strikeThrough";
        modeButton.textContent = "Strike Through"

    } else {
        alert("Error. Please refresh page");
    }
}

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

function deleteItem(event) {
    let clickedItem = event.target;
    let todoList = document.getElementById("TodoList");
    todoList.removeChild(clickedItem);
}