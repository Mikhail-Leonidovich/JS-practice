const inputInText = document.querySelector("input[name=inputInText]");

function funcCheckNumber() {
  let arrayOfInput = inputInText.value.split("");
  if (arrayOfInput.includes("3") == true) {
    console.log("Присутствует цифра 3");
  } else console.log("Цифры 3 нет");
}

inputInText.addEventListener("keyup", () => {
  funcCheckNumber();
});
