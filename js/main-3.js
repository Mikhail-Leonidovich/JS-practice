let inputIn = document.querySelector(".input-in");

inputIn.addEventListener("blur", () => {
  let sum = 0;
  for (let i = 0; i < inputIn.value.length; i++) {
    let a = Number(inputIn.value[i]);
    sum = Number(sum + a);
  }
  console.log(`Сумма цифр данного числа: ${sum}`);
});
