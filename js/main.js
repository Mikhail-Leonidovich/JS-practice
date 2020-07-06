let btnTask = document.querySelector(".btn-task");
let task = document.querySelector(".task");
let btnDecision = document.querySelector(".btn-decision");
let decision = document.querySelector(".decision");
let btnCount = document.querySelector(".btn-count");
let inputOne = document.querySelector("input[name=inputOne]");
let inputTwo = document.querySelector("input[name=inputTwo]");
let inputThree = document.querySelector("input[name=inputThree]");
let inputOut = document.querySelector("input[name=inputOut]");
let btnClear = document.querySelector(".btn-clear");

btnTask.addEventListener("click", () => {
  task.classList.toggle("mod");
});

btnDecision.addEventListener("click", () => {
  decision.classList.toggle("mod");
});

inputOne.addEventListener("keyup", onOperationButtonClick);
inputTwo.addEventListener("keyup", onOperationButtonClick);
inputThree.addEventListener("keyup", onOperationButtonClick);

function onOperationButtonClick(eventObject) {
  let clickElementName = eventObject.currentTarget.name;
  let clickElementValue = eventObject.currentTarget.value;
  localStorage.setItem(clickElementName, clickElementValue);
}

btnCount.addEventListener("click", () => {
  let elements = document.querySelectorAll(".decision > .input-in");
  let sum = 0;

  for (let elem of elements) {
    let a = Number(localStorage.getItem(elem.name));
    sum = sum + a;
  }
  inputOut.value = sum;
});

btnClear.addEventListener("click", () => {
  localStorage.clear();
});
