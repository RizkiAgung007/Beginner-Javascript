let pass = document.getElementById("password");
let icon = document.getElementById("eye-icon");

icon.onclick = function () {
    // Ketika mengisi password
  if (pass.type === "password") {
    pass.type = "text";
    icon.src = "eye-open.png";
  } else {
    // Ketika tidak mengisi password
    pass.type = "password";
    icon.src = "eye-close.png";
  }
};
