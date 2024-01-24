document.getElementById("TodoSubmit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    addTodo();
}, false);

document.getElementById("TodoList").addEventListener("click", addTodo, false);


function addTodo() {
    let todoNode = document.createElement("li");
    let itemToAdd = document.getElementById("TodoInput").value;
    let newNode = document.createTextNode(itemToAdd); // Corrected typo here
    todoNode.appendChild(newNode);
    document.getElementById("TodoList").appendChild(todoNode);
    document.getElementById("TodoInput").value = "";
}
