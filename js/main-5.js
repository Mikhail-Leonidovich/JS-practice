let fullName = document.querySelector(".full-name");
let surname = document.querySelector(".surname");
let name = document.querySelector(".name");
let patronymic = document.querySelector(".patronymic");
let inputsOut = document.querySelectorAll("input[name=inputOut]");

fullName.addEventListener("blur", () => {
  let arrayOfStrings = fullName.value.split(" ");
  let i = 0;
  for (let elem of arrayOfStrings) {
    inputsOut[i].value = elem;
    i = i + 1;
  }
});
