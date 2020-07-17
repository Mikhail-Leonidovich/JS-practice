const inputInText = document.querySelector("input[name=inputInText]");
const btn = document.querySelector("button[name=btn]");

btn.addEventListener("click", () => {
  let inputInTextReverse = funcReverse(inputInText.value);
  if (inputInTextReverse != inputInText.value) {
    console.log("Введите другое слово");
  } else {
    console.log("Слово читается с начала и с конца одинаково");
  }
});

function funcReverse(value) {
  return value.split("").reverse().join("");
}
