var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

// Tambahkan event listener untuk kondisi input pada elemen input password
pass.addEventListener("input", () => {
  // Jika input password memiliki nilai, tampilkan elemen pesan
  if (pass.value.length > 0) {
    msg.style.display = "block";
    // Ketika input password tidak memiliki nilai
  } else { 
    msg.style.display = "none";
  }
  // Periksa panjang nilai input password
  if (pass.value.length < 4) {
    str.innerHTML = "Weak";
    pass.style.borderColor = "red";
    msg.style.color = "red";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "Medium";
    pass.style.borderColor = "orange";
    msg.style.color = "orange";
  } else if (pass.value.length >= 8) {
    str.innerHTML = "Strong";
    pass.style.borderColor = "green";
    msg.style.color = "green";
  }
});
