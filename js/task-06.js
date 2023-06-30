const inputEl = document.querySelector("#validation-input");
const dataValue = Number(inputEl.dataset.length);

const onValidData = (event) => {
  if (event.currentTarget.value.length === dataValue) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", onValidData);
