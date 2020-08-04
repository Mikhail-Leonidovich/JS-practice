const inputResult = document.querySelector("input[name=inputResult]");
const paragraphs = document.querySelectorAll(".paragraph");

window.addEventListener("load", addFunctionForElements());

function addFunctionForElements() {
  for (let elem of paragraphs) {
    elem.addEventListener("click", () => {
      getClicks();
    });
  }
}

function getClicks() {
  inputResult.value = Number(inputResult.value) + 1;
}
