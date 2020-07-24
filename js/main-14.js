const btn = document.querySelector(".btn");
const paragraphs = document.querySelectorAll(".paragraph");
const inputOut = document.querySelector("input[name=inputOut]");

function outputNumbersToInput() {
  let arrayOfStrings = [];
  for (let i = 0; i < paragraphs.length; i++) {
    arrayOfStrings.push(Number(paragraphs[i].innerHTML));
  }
  inputOut.value = arrayOfStrings.join(",");
}

function ascendingOrder() {
  let arrayOfStrings = inputOut.value.split(",");
  arrayOfStrings.sort(function (a, b) {
    return a - b;
  });
  inputOut.value = arrayOfStrings.join(",");
}

btn.addEventListener("click", () => {
  outputNumbersToInput();
  ascendingOrder();
});
