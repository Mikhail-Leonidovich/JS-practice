const links = document.querySelectorAll(".links");

for (let elem of links) {
  let a = elem.href;
  if (a.substring(0, 7) == "http://") {
    elem.innerHTML += "&rarr;";
  }
}
