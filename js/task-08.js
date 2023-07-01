const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    let formInfo = {
      email: email.value,
      password: password.value,
    };
    console.log(formInfo);
  }
  event.currentTarget.reset();
}
