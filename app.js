const birthDate = document.querySelector("#birth-day");
const button = document.querySelector("#button");
const message = document.querySelector("#message");
const luckyNumber = document.querySelector("#lucky-number");
var newBirthDate,
  replacedValue,
  number,
  sum = 0,
  newLuckyNumber;

function clickHandler() {
  show();
  calculation();
  toCheckLucky();
  checkError();
}
function show() {
  newBirthDate = birthDate.value;
  replacedValue = newBirthDate.replaceAll("-", "");
  number = Number(replacedValue);
}
function calculation() {
  while (number !== 0) {
    sum = sum + (number % 10);
    number = parseInt(number / 10);
  }
}
function toCheckLucky() {
  newLuckyNumber = luckyNumber.value;
  if (sum % newLuckyNumber === 0) {
    message.innerText = "You found to be lucky 🤗";
  } else {
    message.innerText = "Sorry you are not lucky 😢";
  }
}
function checkError() {
  if (newLuckyNumber <= 0) {
    message.innerText = "You are making fun of your's. Enter a valid Number";
  } else if ((newBirthDate === "") & (newLuckyNumber === "")) {
    message.innerText = "Enter some digit to check";
  }
}

button.addEventListener("click", clickHandler);
