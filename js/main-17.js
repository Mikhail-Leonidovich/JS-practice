const inputIn = document.querySelector("input[name=inputIn]");
let result = null;

function checkInput(inpValue) {
  if (inpValue >= 1 && a <= 100) {
    return (result = true);
  } else return (result = false);
}

function changeColor(result) {
  if (result === true) {
    inputIn.style = "background-color : green";
  } else {
    inputIn.style = "background-color : red";
  }
}

inputIn.addEventListener("blur", () => {
  let inpValue = Number(inputIn.value);
  checkInput(inpValue);
  changeColor(result);
});
