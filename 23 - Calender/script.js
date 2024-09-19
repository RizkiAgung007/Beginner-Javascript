// Ambil elemen DOM untuk tanggal, hari, bulan, dan tahun
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Buat objek Date baru untuk tanggal dan waktu saat ini
const today = new Date();
// Definisikan array hari dalam seminggu
const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
// Definisikan array nama bulan penuh
const fullMonth = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

// Atur isi dari elemen date menjadi hari dalam angka dari tanggal saat ini
date.innerHTML = today.getDate();
// Atur isi dari elemen day menjadi nama hari dalam seminggu dari tanggal saat ini
day.innerHTML = weekDays[today.getDay()];
// Atur isi dari elemen month menjadi nama bulan penuh dari tanggal saat ini
month.innerHTML = fullMonth[today.getMonth()];
// Atur isi dari elemen year menjadi tahun penuh dari tanggal saat ini
year.innerHTML = today.getFullYear();