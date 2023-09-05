const form = document.querySelector("form.login-form");
// console.log(form.elements);
const { email, password } = form.elements;
form.addEventListener("submit", submitForm);
function submitForm() {
  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };

    console.log(userData);
    event.preventDefault();
    form.reset();
  }
}
