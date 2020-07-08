let numbers = document.querySelector(".numbers");
let body = document.querySelector("body");

numbers.addEventListener("blur", () => {
  let arrayOfStrings = numbers.value.split(",");
  let average = 0;
  let i = 0;
  for (; i < arrayOfStrings.length; ) {
    let a = arrayOfStrings[i];
    average = Number(average) + Number(a);
    i = i + 1;
  }
  average = average / i;

  let div = document.createElement("DIV");
  body.appendChild(div);
  div.innerHTML = average;
});
