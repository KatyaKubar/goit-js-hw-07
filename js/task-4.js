
const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.namedItem("email").value.trim();
  const password = form.elements.namedItem("password").value.trim();
  if (!email || !password) {
    alert("Всі поля форми повинні бути заповнені");
    return;
  }

  const data = { email, password };
});