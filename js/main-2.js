let allInputs = document.querySelectorAll(".num");
let btn = document.querySelector(".button");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < allInputs.length; i++) {
    let elem = Number(allInputs[i].value);
    sum = sum + elem;
  }
  result.innerHTML = sum;
});
