// Membuat input pada Date
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let resul = document.getElementById("result");

// Membuat fungsi menghitung usia
function calculateAge() {
  // Usia kelahiran
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  // Usia hari ini
  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  //   Selisih usia
  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  resul.innerHTML = `You are <span>${y3}</span> years old <span>${m3}</span> months and <span>${d3}</span> days old`;
}
//   Fungsi jika hari lahir lebih kecil dari hari ini
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
