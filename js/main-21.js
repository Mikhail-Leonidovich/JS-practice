const inputIn = document.querySelector("input[name=inputIn]");
const inputLength = document.querySelector("input[name=inputLength]");
const inputSimbols = document.querySelector("input[name=inputSimbols]");
const btn = document.querySelector(".btn");

let simbols = "";
let strLength = 0;

function generateString() {
  inputIn.value = "";

  for (let i = 0; i < strLength; i++) {
    inputIn.value += simbols.charAt(
      Math.floor(Math.random() * Math.floor(simbols.length))
    );
  }
}

function getLengthOfString() {
  strLength = inputLength.value;
}

function getSimbols() {
  simbols = inputSimbols.value;
}

btn.addEventListener("click", () => {
  getLengthOfString();
  getSimbols();
  generateString();
});
