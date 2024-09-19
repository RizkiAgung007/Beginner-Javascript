// Memperoleh semua elemen dengan kelas "list" dan menyimpannya dalam variabel lists
let lists = document.getElementsByClassName("list");
// Memperoleh elemen dengan ID "right" dan menyimpannya dalam variabel rightBox
let rightBox = document.getElementById("right");
// Memperoleh elemen dengan ID "left" dan menyimpannya dalam variabel leftBox
let leftBox = document.getElementById("left");

// Looping melalui setiap elemen dengan kelas "list"
for (list of lists) {
  // Menambahkan event listener untuk event "dragstart" pada setiap elemen
  list.addEventListener("dragstart", function (e) {
    // Menyimpan elemen yang sedang di-drag
    let selected = e.target;

    // Menambahkan event listener untuk event "dragover" pada rightBox
    rightBox.addEventListener("dragover", function (e) {
      // Mencegah default behavior saat elemen di-drag di atas rightBox
      e.preventDefault();
    });
    // Menambahkan event listener untuk event "drop" pada rightBox
    rightBox.addEventListener("drop", function (e) {
      // Memindahkan elemen yang di-drag ke dalam rightBox
      rightBox.appendChild(selected);
      // Menetapkan selected kembali ke null setelah drop
      selected = null;
    });
    // Menambahkan event listener untuk event "dragover" pada leftBox
    leftBox.addEventListener("dragover", function (e) {
      // Mencegah default behavior saat elemen di-drag di atas leftBox
      e.preventDefault();
    });
    // Menambahkan event listener untuk event "drop" pada leftBox
    leftBox.addEventListener("drop", function (e) {
      // Memindahkan elemen yang di-drag ke dalam leftBox
      leftBox.appendChild(selected);
      // Menetapkan selected kembali ke null setelah drop
      selected = null;
    });
  });
}
  