// Ambil elemen gambar produk
let product = document.getElementById("product-img");
// Ambil semua elemen dengan class "btn"
let button = document.getElementsByClassName("btn");

// Tambahkan listener event pada tombol pertama
button[0].onclick = function () {
  // Ketika tombol diklik, ubah sumber gambar produk menjadi "images/image1.png"
  // dan hapus class "active" dari semua tombol, kemudian tambahkan class "active" pada tombol yang diklik
  product.src = "images/image1.png";
  for (bn of button) {
    bn.classList.remove("active");
  }
  this.classList.add("active");
};
// Tambahkan listener event pada tombol kedua
button[1].onclick = function () {
  // Ketika tombol diklik, ubah sumber gambar produk menjadi "images/image2.png"
  // dan hapus class "active" dari semua tombol, kemudian tambahkan class "active" pada tombol yang diklik
  product.src = "images/image2.png";
  for (bn of button) {
    bn.classList.remove("active");
  }
  this.classList.add("active");
};
// Tambahkan listener event pada tombol ketiga
button[2].onclick = function () {
  // Ketika tombol diklik, ubah sumber gambar produk menjadi "images/image3.png"
  // dan hapus class "active" dari semua tombol, kemudian tambahkan class "active" pada tombol yang diklik
  product.src = "images/image3.png";
  for (bn of button) {
    bn.classList.remove("active");
  }
  this.classList.add("active");
};
