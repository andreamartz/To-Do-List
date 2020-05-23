// Took about 8 hours including time spent reviewing material

// Part 1
// For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

// As a user, you should be able to:

// Add a new todo (by submitting a form)
//   1. Create a form in HTML.
//   2. Form should have a title <p> above it: "To Do List".
//   3. Form should have a <ul> (with one example <li> in it?)
//   4. Form should have an input text field for user to type the todo action item.
//   5. Form should have a submit button to create a new todo
//   6. Upon submitting the form, a new li element should be created that contains the text from the input field on the form. (create the element and append it to the ul)

// Mark a todo as completed (cross out the text of the todo)
//   1. Form should have a button to mark a todo as completed.

// Remove a todo
//   1. Form should have a button beside every todo; when clicked, this button removes the todo.

// Other
// When the form is submitted, the page should not refresh; the data should stay on the page.
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
