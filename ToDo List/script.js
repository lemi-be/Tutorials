const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");


// --------------------------------------

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const newTask = todoInput.value.trim();
  if (newTask === "") {
    alert("Please Add task");
    return;
  }
  const taskList = document.createElement("li");
  taskList.innerHTML = `
<span>${newTask}</span>
<button class="delete-btn">Delete</button>
`;
  // Append the new task to the list
  todoList.appendChild(taskList);

  // Clear the input field
  todoInput.value = "";

  taskList.addEventListener("click", markComplete);
  taskList.querySelector(".delete-btn").addEventListener("click", deleteTask);
}

function markComplete(event) {
  if (event.target.tagName === "LI" || event.target.tagName === "SPAN") {
    event.target.closest("li").classList.toggle("completed");
  }
}

function deleteTask(event) {
  event.stopPropagation();
  const taskToDelete = event.target.closest("li");
  todoList.removeChild(taskToDelete);
}
