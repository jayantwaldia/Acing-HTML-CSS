let createBtn = document.querySelector("button");
let body = document.body;

createBtn.addEventListener("click", () =>
  messageBox("Hey, How are you doing Jayant ?", "chatBox")
);

function messageBox(textMsg, textType) {
  createBtn.disabled = true;

  let box = document.createElement("div");
  box.setAttribute("class", "messageBox");
  body.appendChild(box);

  let message = document.createElement("p");
  message.textContent = textMsg;
  box.appendChild(message);

  let crossBtn = document.createElement("button");
  crossBtn.textContent = "x";
  crossBtn.setAttribute("class", "crossBtn");
  box.appendChild(crossBtn);

  crossBtn.addEventListener("click", () => {
    createBtn.disabled = false;
    body.removeChild(box);
  });
}
