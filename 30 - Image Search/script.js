// Deklarasi konstanta untuk menyimpan kunci akses Unsplash API
const accessKey = "S2o1OTrtMlT-eKvtfaokBe8zjI8WODLFEk9KMyGbgjU";
// Mendapatkan elemen-elemen HTML yang diperlukan dari DOM
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");

// Variabel untuk menyimpan kata kunci pencarian dan nomor halaman pencarian
let keyword = "";
let page = 1;

// Fungsi untuk melakukan pencarian gambar di Unsplash API
async function searchImage() {
  // Mengambil kata kunci pencarian dari nilai input
  keyword = searchBox.value;

  // Membuat URL dengan menggunakan kata kunci dan nomor halaman pencarian
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  // Mengirim permintaan HTTP GET ke API Unsplash
  const response = await fetch(url);
  // Mengonversi respons menjadi objek JSON
  const data = await response.json();

  // Jika halaman pencarian adalah halaman pertama, bersihkan hasil pencarian sebelumnya
  if (page === 1) {
    searchResult.innerHTML = "";
  }

  // Mendapatkan array hasil pencarian
  const results = data.results;

  // Menampilkan setiap hasil pencarian dengan membuat elemen gambar dan menambahkannya ke dalam tautan
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  // Menampilkan tombol "Show More" setelah pencarian pertama
  showMore.style.display = "block";
}

// Menambahkan event listener untuk form pencarian
searchForm.addEventListener("submit", (e) => {
  // Mencegah pengiriman form secara default
  e.preventDefault();
  // Memanggil fungsi pencarian gambar
  searchImage();
});

// Menambahkan event listener untuk tombol "Show More"
showMore.addEventListener("click", () => {
  // Meningkatkan nomor halaman pencarian
  page++;
  // Memanggil fungsi pencarian gambar lagi untuk menampilkan hasil pencarian selanjutnya
  searchImage();
});
