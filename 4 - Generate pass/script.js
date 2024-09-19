// Membuat generate random
const passBox = document.getElementById("pass");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "`~!@#$%^&*()_+-=[]{};:,.<>/?";

// Variabel untuk menggabungkan karakter
const allChar = upperCase + lowerCase + numbers + symbols;

// Membuat function untuk onclick pada button 
function passwords() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

  // Generate acak dari 4 karakter
  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
}
//   Memapilkan password pada kotak input
passBox.value = password;
};

// Mencopy password yang muncul
function copyPass() {
    passBox.select();
    document.execCommand("copy");
}
