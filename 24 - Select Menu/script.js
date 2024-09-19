// Mendapatkan elemen HTML dengan id atau class tertentu
var selectField = document.getElementById("select"); // Elemen select field
var selectText = document.getElementById("select-text"); // Elemen teks opsi yang dipilih
var option = document.getElementsByClassName("options"); // Opsi-opsi dalam select field
var listed = document.getElementById("list"); // Elemen daftar yang berisi opsi
var arrow = document.getElementById("icon"); // Elemen ikon arrow

// Menghidupkan atau menyembunyikan daftar dan mengubah arah ikon arrow ketika select field diklik
selectField.onclick = function () {
 listed.classList.toggle("hide"); // Menghidupkan atau menyembunyikan daftar
 arrow.classList.toggle("rotate"); // Mengubah arah atau tidak ikon arrow
};

// Menetapkan teks opsi yang dipilih dan menghidupkan atau menyembunyikan daftar dan mengubah arah ikon arrow ketika opsi diklik
for (option of option) {
 option.onclick = function () {
   selectText.innerHTML = this.textContent; // Menetapkan teks opsi yang dipilih
   listed.classList.toggle("hide"); // Menghidupkan atau menyembunyikan daftar
   arrow.classList.toggle("rotate"); // Mengubah arah atau tidak ikon arrow
 };
}