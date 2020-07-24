const btn = document.querySelector(".btn");
let paragraphs = document.querySelectorAll(".paragraph");

function addNumberParagraphs() {
  for (let i = 0; i < paragraphs.length; ) {
    paragraphs[i].innerHTML += ++i;
  }
}

btn.addEventListener("click", () => {
  addNumberParagraphs();
});

console.log(paragraphs.length);
