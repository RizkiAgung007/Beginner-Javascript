const scriptURL =
  "https://script.google.com/macros/s/AKfycbwKjnCa7GzB1qT7i7f4rFl9s6S_SPksLzDZEETrJY3aHpRU_m5JWMiUOo_7WFFb8Enp/exec";
const form = document.forms["submit-to-google-sheet"];
const message = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Thank You For Email!";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
