// Atur tanggal penghitungan mundur menuju tanggal 20 Maret 2024 pukul 00.00.00
var countDownDate = new Date("Jul 20, 2024 20:00:00").getTime();

// Perbarui penghitungan setiap 1000ms (1 detik)
var x = setInterval(function() {
 // Dapatkan tanggal dan waktu saat ini
 var now = new Date().getTime();

 // Hitung selisih waktu antara tanggal penghitungan mundur dan tanggal/waktu saat ini
 var distance = countDownDate - now;

 // Hitung hari, jam, menit, dan detik yang tersisa sebelum tanggal penghitungan mundur
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Tampilkan waktu yang tersisa dalam HTML dengan elemen ID yang ditentukan
 document.getElementById("days").innerHTML = days;
 document.getElementById("hours").innerHTML = hours;
 document.getElementById("minutes").innerHTML = minutes;
 document.getElementById("seconds").innerHTML = seconds;

 // Jika penghitungan mundur telah habis, berhenti memperbarui penghitungan dan tampilkan "00" untuk semua unit waktu
 if (distance < 0) {
   clearInterval(x);
   document.getElementById("days").innerHTML = "00";
   document.getElementById("hours").innerHTML = "00";
   document.getElementById("minutes").innerHTML = "00";
   document.getElementById("seconds").innerHTML = "00";
 }
}, 1000);