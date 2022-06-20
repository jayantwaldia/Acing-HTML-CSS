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

render();

function saveTask() {
  const taskTitle = document.getElementById("task-title");
  const title = taskTitle.value;
  todos.push(title);
  render();
}

function render() {
  document.getElementById("task-text").innerHTML = "";
  todos.forEach((task) => {
    let element = document.createElement("div");
    element.innerText = task;
    let title = document.getElementById("tasks");
    title.appendChild(element);
  });
}

function inputTask() {
  var x = document.getElementById("task-input");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}
