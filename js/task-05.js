const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onFillOutput = (event) => {
  if (event.currentTarget.value !== "") {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onFillOutput);
