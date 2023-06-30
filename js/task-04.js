const valueEl = document.querySelector("#value");
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrBtn.addEventListener("click", onDecrBtnEvent);
incrBtn.addEventListener("click", onIncrBtnEvent);

function onDecrBtnEvent() {
  valueEl.textContent = counterValue -= 1;
}
function onIncrBtnEvent() {
  valueEl.textContent = counterValue += 1;
}
