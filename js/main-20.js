const inputIn = document.querySelector("input[name=inputIn]");
const btn = document.querySelector(".btn");

function generateString() {
  inputIn.value = "";
  let simbols =
    "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < 8; i++) {
    inputIn.value += simbols.charAt(
      Math.floor(Math.random() * Math.floor(simbols.length))
    );
  }
}

btn.addEventListener("click", () => {
  generateString();
});
