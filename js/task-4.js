
const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.namedItem("email").value;
  const password = form.elements.namedItem("password").value;
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: email.trim(),
    password: password.trim(),
  };

  console.log(data);

  form.reset();
});
