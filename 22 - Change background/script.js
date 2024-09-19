// Seleksi elemen gambar dari DOM
var imgBox = document.querySelector(".img-box");
// Seleksi elemen kotak gambar dari DOM
var imgWrap = document.querySelector(".img-wrap");
// Seleksi elemen gambar asli dari DOM
var originalImg = document.getElementById("original");
// Seleksi elemen garis dari DOM
var line = document.getElementById("line");
// Dapatkan jarak kiri kotak gambar
var leftSpace = imgBox.offsetLeft;

// Atur lebar gambar asli sama dengan lebar kotak gambar
originalImg.style.width = imgB ox.offsetWidth + "px";

// Tambahkan event listener gerakan mouse pada kotak gambar
imgBox.onmousemove = function(e) {
// Hitung lebar kotak berdasarkan posisi cursor
var boxWidth = (e.pageX - leftSpace) + "px";
// Atur lebar kotak gambar menjadi lebar kotak baru
imgWrap.style.width = boxWidth;
// Atur posisi garis menjadi posisi kotak baru
line.style.left = boxWidth;
}