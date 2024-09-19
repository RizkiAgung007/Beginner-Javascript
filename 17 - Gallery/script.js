// Definisikan elemen kontainer galeri
let galleryContain = document.querySelector(".gallery");

// Definisikan elemen tombol kembali
let backBtn = document.getElementById("back-btn");

// Definisikan elemen tombol selanjutnya
let nextBtn = document.getElementById("next-btn");

// Tambahkan event listener untuk peristiwa roda ke elemen kontainer galeri
galleryContain.addEventListener("wheel", (evt) => {
  // Hentikan perilaku roda default
  evt.preventDefault();

  // Gulir kontainer galeri secara horizontal berdasarkan delta roda mouse
  galleryContain.scrollLeft += evt.deltaY;

  // Setel perilaku gulir ke "auto" untuk memungkinkan gulir yang lembut
  galleryContain.style.scrollBehavior = "auto";
});

// Tambahkan event listener untuk peristiwa klik ke elemen tombol kembali
backBtn.addEventListener("click", () => {
  // Setel perilaku gulir ke "smooth" untuk efek gulir yang lembut
  galleryContain.style.scrollBehavior = "smooth";

  // Gulir kontainer galeri secara horizontal ke kiri sejauh 900 piksel
  galleryContain.scrollLeft -= 900;
});

// Tambahkan event listener untuk peristiwa klik ke elemen tombol selanjutnya
nextBtn.addEventListener("click", () => {
  // Setel perilaku gulir ke "smooth" untuk efek gulir yang lembut
  galleryContain.style.scrollBehavior = "smooth";

  // Gulir kontainer galeri secara horizontal ke kanan sejauh 900 piksel
  galleryContain.scrollLeft += 900;
});