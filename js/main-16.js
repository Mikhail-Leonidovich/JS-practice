const inputText = document.querySelector("input[name=inputText]");
const text = document.querySelector(".text");

function getText() {
  let a = document.getSelection().toString();
  inputText.value = a;
}


document.addEventListener("mouseup", () => {
  getText();
});

