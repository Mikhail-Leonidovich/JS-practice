let inputText = document.querySelector("input[name=text]");

inputText.addEventListener("blur", () => {
  let arrayOfStrings = inputText.value.split(" ");
  let arrayOfElements = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfElements.push(arrayOfStrings[i].length);
  }
  let a = Math.max.apply(null, arrayOfElements);
  console.log(a);
});
