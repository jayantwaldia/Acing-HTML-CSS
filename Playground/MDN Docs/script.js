let myButton = document.querySelector("button");

myButton.onclick = () => {
  setName();
};

function setName() {
  let myName = prompt("Enter Name");
  if (!myName) {
    setName();
  } else {
    localStorage.setItem("name", myName);
    let greeting = document.getElementById("greet");
    greeting.textContent = "Hey " + myName;
  }
}
