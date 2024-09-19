// Mendapatkan elemen image box dan gambar dari dokumen HTML
let imageBox = document.getElementById("imgBox");
let image = document.getElementById("qrImg");
let text = document.getElementById("qrText");

// Fungsi untuk membuat kode QR menggunakan API QR server
function generateQr() {
// Memeriksa apakah ada nilai di field teks
if (text.value.length > 0) {
  // Mengatur sumber gambar ke URL API QR server dengan nilai teks sebagai parameter
  image.src = 
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + 
    text.value;
  // Menambahkan kelas 'show-img' ke kotak gambar untuk menampilkan kode QR
  imageBox.classList.add("show-img");
} else {
  // Jika field teks kosong, menambahkan kelas 'error' ke field teks
  text.classList.add("error");
  // Setelah 1 detik, menghapus kelas 'error' dari field teks
  setTimeout(() => {
    text.classList.remove("error");
  }, 1000);
}
}