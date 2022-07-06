let todos = ["Sleep", "Eat", "Repeat"];
render();
function addTodo() {
  let task = document.getElementById("task-title");
  let title = task.value;
  todos.push(title);
  render();
}

function render() {
  document.getElementById("todo-list").innerHTML = "";
  todos.forEach(function (tasks) {
    let element = document.createElement("div");
    element.innerText = tasks;
    let todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}
