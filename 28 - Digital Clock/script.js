// Mendapatkan elemen HTML dengan ID "hours", "minutes", dan "seconds"
let hrs = document.getElementById("hours");
let mnt = document.getElementById("minutes");
let sec = document.getElementById("seconds");

// Set interval function akan dijalankan setiap 1000 milidetik (1 detik)
setInterval(() => {
  // Mendapatkan waktu saat ini
  let currentTime = new Date();
  // Mengatur isi elemen dengan ID "hours" dengan jam saat ini
  hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  // Mengatur isi elemen dengan ID "minutes" dengan menit saat ini
  mnt.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  // Mengatur isi elemen dengan ID "seconds" dengan detik saat ini
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000); // Interval waktu dalam milidetik (di sini, setiap 1000 milidetik)
