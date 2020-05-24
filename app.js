const form = document.querySelector("#todo-form");
const todo = document.querySelector("#todo"); // the form input
const todoList = document.querySelector("#todo-list"); // the ul
let savedTodos = localStorage.getItem("todoItems");

if (savedTodos) {
  todoList.innerHTML = savedTodos;
}

// Add new todo to the page after form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  const removeButton = document.createElement("button");

  // Do not add empty todos
  if (todo.value.length < 1) return;

  newTodo.innerText = todo.value;

  // Reset the value in the text input field to an empty string
  todo.value = "";

  todoList.appendChild(newTodo);
  removeButton.innerText = "Remove Todo";
  newTodo.appendChild(removeButton);

  saveTodos();
});

todoList.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.tagName === "BUTTON") {
    removeTodo(e);
  } else if (e.target.tagName === "LI") {
    markAsComplete(e);
  }
  saveTodos();
});

function markAsComplete(event) {
  event.target.classList.toggle("done");
}

function removeTodo(event) {
  event.target.parentElement.remove();
}

function saveTodos() {
  localStorage.setItem("todoItems", todoList.innerHTML);
}
