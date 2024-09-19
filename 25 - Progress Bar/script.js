// Simpan elemen HTML dengan id "number" ke dalam variabel 'num'
let num = document.getElementById("number");
// Inisialisasi variabel 'count' dengan nilai 0
let count = 0;

// Set interval menggunakan fungsi 'setInterval' yang akan mengeksekusi fungsi yang diberikan setiap 27 milidetik
setInterval(() => {
  // Periksa apakah nilai dari 'count' sama dengan 75
  if (count == 75) {
    // Jika ya, bersihkan interval menggunakan 'clearInterval'
    clearInterval();
  } else {
    // Jika tidak, tambahkan nilai dari 'count' dengan 1
    count += 1;
    // Atur nilai innerHTML dari elemen 'num' menjadi nilai baru dari 'count' yang diikuti simbol '%'
    num.innerHTML = count + "%";
  }
}, 27);
