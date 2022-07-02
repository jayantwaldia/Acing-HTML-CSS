window.onload = function () {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  let month = months[d.getMonth()];
  document.getElementById("weekDay").innerHTML = day + ", " + d.getDate();
  document.getElementById("month").innerHTML = month;
};

const todos = [];
const tasks = document.getElementById("tasks");
const userInput = document.getElementById("user-input");
const inputTaskButton = document.querySelector(".add-icon");
const saveTaskButton = document.querySelector(".save-task");

inputTaskButton.addEventListener("click", inputTask);
saveTaskButton.addEventListener("click", saveTask);
tasks.addEventListener("click", deleteTask);

function inputTask() {
  var x = document.getElementById("task-input");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

function saveTask() {
  if (userInput.value === "") {
    return;
  }
  todos.push(userInput.value);
  render(userInput.value);
  userInput.value = "";
}

function render(userInput) {
  const task = document.createElement("div");
  task.setAttribute("class", "task");

  const taskTitle = document.createElement("div");
  taskTitle.setAttribute("id", "task-title");

  const checkBox = document.createElement("input");
  checkBox.setAttribute("id", "checkbox");
  checkBox.setAttribute("type", "checkbox");

  const deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete Task";
  deleteTask.setAttribute("id", "delete");

  taskTitle.textContent = userInput;

  task.appendChild(checkBox);
  task.appendChild(taskTitle);
  task.appendChild(deleteTask);

  tasks.appendChild(task);
}

function deleteTask(e) {
  if (e.target.getAttribute("id") === "delete") {
    e.target.parentNode.remove();
  }
}
