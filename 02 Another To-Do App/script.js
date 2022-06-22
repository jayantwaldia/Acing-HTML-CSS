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

const inputTaskButton = document.querySelector(".add-icon");
inputTaskButton.addEventListener("click", inputTask);

const saveTaskButton = document.querySelector(".save-task");
saveTaskButton.addEventListener("click", saveTask);

function inputTask() {
  var x = document.getElementById("task-input");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

function saveTask() {
  const userInput = document.getElementById("user-input");
  todos.push(userInput.value);
}
