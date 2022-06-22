let target = Math.floor(Math.random() * 100) + 1;

let prevGuess = document.querySelector(".prevGuess");
let result = document.querySelector(".result");
let lowOrHigh = document.querySelector(".lowOrHigh");

let userInput = document.querySelector(".userInput");
let submit = document.querySelector(".submitInput");

let countGuess = 1;
submit.addEventListener("click", render);

function render() {
  const inputNum = Number(userInput.value);
  if (countGuess === 1) {
    prevGuess.textContent = "Previous guesses: ";
  }
  prevGuess.textContent += inputNum + " ";
  if (inputNum === target) {
    result.textContent = "Congratulations!, you guessed it right!";
    result.style.backgroundColor = "green";
    lowOrHigh.textContent = "";
    startNewGame();
  } else if (countGuess === 10) {
    result.textContent = "GAME OVER!";
    result.style.backgroundColor = "red";
    lowOrHigh.textContent = "";
    startNewGame();
  } else {
    result.textContent = "Wrong!";
    result.style.backgroundColor = "red";
    inputNum > target
      ? (lowOrHigh.textContent = "Guessed number too high!")
      : (lowOrHigh.textContent = "Guessed number too low!");
  }
  countGuess += 1;
  userInput.value = "";
  let resetButton;
}

function startNewGame() {
  userInput.disabled = true;
  submit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Restart Game";
  let resultDivs = document.querySelector(".resultDivs");
  resultDivs.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  countGuess = 1;
  const resetDivs = document.querySelectorAll(".resultDivs div");
  for (const resetDiv of resetDivs) {
    resetDiv.textContent = "";
  }

  userInput.disabled = false;
  submit.disabled = false;

  result.style.backgroundColor = "white";
  resetButton.parentNode.removeChild(resetButton); // we can access the parent only via child, hence used parentNode

  target = Math.floor(Math.random() * 100) + 1;
  userInput.focus();
}
