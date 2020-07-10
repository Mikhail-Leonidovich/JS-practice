let inputIn = document.querySelector("input[name=fullName]");

inputIn.addEventListener("blur", () => {
  let arrayOfStrings = inputIn.value.split(" ");

  for (let i = 0; i < arrayOfStrings.length; i++) {
    let string = arrayOfStrings[i];
    let firstElemOfString = string.slice(0, 1);
    let newLetter = firstElemOfString.toUpperCase();
    arrayOfStrings[i] = newLetter + string.slice(1);
  }
  inputIn.value = arrayOfStrings.join(" ");
});
