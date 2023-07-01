function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const changeBtnEl = document.querySelector(".change-color");

changeBtnEl.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}
