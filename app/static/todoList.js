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
        modeButton.textContent = "Strike Through"
    } else if (currentStatus =="delete") {
        currentStatus = "strikeThrough";
        modeButton.textContent = "Delete"

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
    addTodoAJAX(itemToAdd);
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

function addTodoAJAX(todoText) {
    fetch('/add_todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todo_text: todoText }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            console.log('Todo added successfully');
        } else {
            console.error('Error adding todo:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}