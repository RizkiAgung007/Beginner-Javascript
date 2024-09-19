// Query selectors untuk elemen yang digunakan di aplikasi catatan
const noteContainer = document.querySelector(".note-contain");
const createButton = document.querySelector(".btn");

// Array untuk menyimpan elemen catatan
let notes = document.querySelectorAll(".input-box");

// Fungsi untuk menampilkan catatan dari localStorage
function showNotes() {
 // Set the innerHTML dari noteContainer ke catatan dari localStorage
 noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Fungsi untuk menyimpan catatan di localStorage
function updateStorage() {
 // Set the 'notes' key di localStorage ke innerHTML saat ini dari noteContainer
 localStorage.setItem("notes", noteContainer.innerHTML);
}

// Fungsi untuk membuat catatan baru ketika tombol create diklik
createButton.addEventListener("click", () => {
 // Membuat elemen p baru dan elemen img untuk tombol delete
 let inputBox = document.createElement("p");
 let img = document.createElement("img");

 // Set the class dan atribut contenteditable untuk inputBox
 inputBox.className = "input-box";
 inputBox.setAttribute("contenteditable", "true");

 // Set the source dari img ke ikon delete dan menambahkannya ke inputBox
 img.src = "images/delete.png";
 noteContainer.appendChild(inputBox).appendChild(img);
});

// Penanganan event untuk menghapus catatan dan mengupdate localStorage
noteContainer.addEventListener("click", function (e) {
 // Jika elemen yang diklik adalah IMG (tombol delete)
 if (e.target.tagName === "IMG") {
   // Hapus node induk (catatan) dan update localStorage
   e.target.parentElement.remove();
   updateStorage();
 }
 // Jika elemen yang diklik adalah P (teks catatan)
 else if (e.target.tagName === "P") {
   // Dapatkan semua elemen catatan dan tambahkan penanganan event ke setiap elemen untuk mengupdate localStorage saat keyup
   notes = document.querySelectorAll(".input-box");
   notes.forEach((nt) => {
     nt.onkeyup = function () {
       updateStorage();
     };
   });
 }
});

// Penanganan event untuk menekan tombol enter untuk menyisipkan break line
document.addEventListener("keydown", (event) => {
 if (event.key === "Enter") {
   // Membatalkan perilaku default dan menyisipkan break line
   document.execCommand("insertLineBreak");
   event.preventDefault();
 }
});