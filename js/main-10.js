let inputIn = document.querySelector("input[name=inputIn]");
let arrayOfStrings = [];
let arrayOfDays = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

function getInputValue() {
  arrayOfStrings = inputIn.value.split(".");
  let getDate = arrayOfStrings.reverse().join(".");
  let day = new Date(getDate).getDay();
  console.log(arrayOfDays[day]);
}

inputIn.addEventListener("blur", () => {
  getInputValue();
});
