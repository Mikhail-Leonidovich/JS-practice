let item = document.querySelector(".item");
let counter = 1;

window.addEventListener("load", () => {
  window.setInterval(changeColor, 1 * 1000);
});

const changeColor = () => {
  if (counter % 2 == 0) {
    item.style.backgroundColor = "green";
    counter++;
  } else {
    item.style.backgroundColor = "red";
    counter++;
  }
};
