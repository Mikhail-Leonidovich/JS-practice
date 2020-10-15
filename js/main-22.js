let inpTime = document.querySelector(".input-time");
let timer = document.querySelector(".timer");
let counter = 1;

inpTime.addEventListener("blur", () => {
  counter = parseInt(inpTime.value);
  window.funcId = window.setInterval(go, 1 * 1000);
});

let go = () => {
  if (parseInt(counter) > 0) {
    timer.innerHTML = parseInt(counter) - 1;
    counter--;
  }
  if (parseInt(counter) == 0) {
    stop();
  }
};

let stop = () => {
  window.clearInterval(window.funcId);
};
