// Variable pada toastBox
let tBox = document.getElementById("toastBox");

// variable pada pesan yang muncul
let successMsg ='<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg ='<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg ='<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

// Membuat fungsi untuk memunculkan notifikasi
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  //   Memunculkan notifikasi pada toastBox
  tBox.appendChild(toast);

  //   Mengubah warna pada error dan invalid
  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  // Menghilangkan notifikasi setelah beberapa waktu
  setTimeout(() => {
    toast.remove();
  }, 5000);
}