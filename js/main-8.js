let getDate = document.querySelector("input[name=getDate]");

function getDateValue() {
  let arrayOfStrings = getDate.value.split(".");

  for (let i = 0; i < arrayOfStrings.lenght; i++) {
    let elem = arrayOfStrings[i];
    arrayOfStrings.push(elem);
    delete arrayOfStrings[i];
  }
  arrayOfStrings = arrayOfStrings.reverse().join("-");
  getDate.value = arrayOfStrings;
}

getDate.addEventListener("blur", () => {
  getDateValue();
});
