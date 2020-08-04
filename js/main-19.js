const inputIn = document.querySelector("input[name=inputIn]");
const numberOutput = document.querySelector(".number-output");

function getNumber() {
  localStorage.setItem("inputValue", inputIn.value);
}

function squereOfNumber() {
  let num = Number(localStorage.getItem("inputValue"));
  num *= Number(num);
  numberOutput.innerHTML = num;
  localStorage.removeItem("inputValue");
}

inputIn.addEventListener("keyup", () => {
  getNumber();
  squereOfNumber();
});
