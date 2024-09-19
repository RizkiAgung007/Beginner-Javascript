// Deklarasikan variabel 'icon' dan berikan referensi ke elemen DOM dengan id 'icon'
var icon = document.getElementById("icon");

// Definisikan fungsi 'klikIcon' yang mengalihkan kelas 'dark-theme' pada elemen body dokumen
function klikIcon() {
  // Alihkan kelas 'dark-theme' pada elemen body dokumen
  document.body.classList.toggle("dark-theme");
  
  // Periksa apakah kelas 'dark-theme' ada pada elemen body dokumen
  if (document.body.classList.contains("dark-theme")) {
    // Jika kelas 'dark-theme' ada, ubah atribut 'src' dari elemen 'icon' menjadi 'icon/sun.png'
    icon.src = "icon/sun.png";
  } else {
    // Jika kelas 'dark-theme' tidak ada, ubah atribut 'src' dari elemen 'icon' menjadi 'icon/moon.png'
    icon.src = "icon/moon.png";
  }
};