let userDate = document.querySelector("input[name=userDate]");
let btn = document.querySelector(".btn");

let currentDate = new Date();
let result = 0;

function counterUserDate() {
  result = currentDate.getFullYear() - userDate.value;
}

function createNewElement() {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.innerHTML = result;
}

btn.addEventListener("click", () => {
  counterUserDate();
  createNewElement();
});
