// Mendeklarasikan variabel untuk menyimpan referensi ke elemen-elemen error di HTML
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// Mendeklarasikan variabel untuk menyimpan referensi ke elemen-elemen error di HTML
function validateName() {
  // Mendapatkan nilai dari bidang nama dari form HTML
  var name = document.getElementById("name-form").value;

  // Memeriksa apakah bidang nama kosong
  if (name.length == 0) {
    // Menampilkan pesan error jika bidang nama kosong
    nameError.innerHTML = "Name is required";
    // Mengembalikan false untuk menunjukkan kegagalan validasi
    return false;
  }

  // Memeriksa apakah bidang nama hanya berisi huruf dan spasi
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    // Menampilkan pesan error jika bidang nama berisi karakter yang tidak valid
    nameError.innerHTML = "Write full name";
    // Mengembalikan false untuk menunjukkan kegagalan validasi
    return false;
  }

  // Jika bidang nama valid, menampilkan ikon centang
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  // Mengembalikan true untuk menunjukkan keberhasilan validasi
  return true;
}

// Fungsi untuk validasi bidang nomor telepon
function validatePhone() {
  // Mendapatkan nilai dari bidang nomor telepon dari form HTML
  var phone = document.getElementById("phone-form").value;

  // Memeriksa apakah bidang nomor telepon kosong
  if (phone.length == 0) {
    // Menampilkan pesan error jika bidang nomor telepon kosong
    phoneError.innerHTML = "Phone no is required";
    return false;
  }

  // Memeriksa apakah bidang nomor telepon berisi genap 10 digit
  if (phone.length !== 10) {
    // Menampilkan pesan error jika bidang nomor telepon berisi jumlah digit yang tidak valid
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }

  // Memeriksa apakah bidang nomor telepon berisi hanya digit
  if (!phone.match(/^[0-9]{10}$/)) {
    // Menampilkan pesan error jika bidang nomor telepon berisi karakter yang tidak valid
    phoneError.innerHTML = "Only digits please";
    return false;
  }

  // Menampilkan pesan error jika bidang nomor telepon berisi karakter yang tidak valid
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// Fungsi untuk validasi bidang email
function validateEmail() {
  // Mendapatkan nilai dari bidang email dari form HTML
  var email = document.getElementById("email-form").value;

  // Memeriksa apakah bidang email kosong
  if (email.length == 0) {
    // Menampilkan pesan error jika bidang email kosong
    emailError.innerHTML = "Email is required";
    return false;
  }

  // Memeriksa apakah bidang email berisi alamat email yang valid
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    // Menampilkan pesan error jika bidang email berisi alamat email yang tidak valid
    emailError.innerHTML = "Invalid email";
    return false;
  } 
  // Jika bidang email valid, menampilkan ikon centang
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// Fungsi untuk validasi bidang pesan
function validateMessage() {
  // Mendapatkan nilai dari bidang pesan dari form HTML
  var message = document.getElementById("message-form").value;

  // Mendapatkan jumlah karakter yang dibutuhkan untuk bidang pesan
  var required = 30;

  // Menghitung jumlah karakter yang tersisa
  var left = required - message.length;

  // Memeriksa apakah jumlah karakter yang tersisa lebih besar dari nol
  if (left > 0) {
    // Menampilkan pesan error jika jumlah karakter yang tersisa lebih besar dari nol
    messageError.innerHTML = left + "more characters required";
    return false;
  }
  // Jika bidang pesan valid, menampilkan ikon centang
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// Fungsi untuk validasi formulir
function validateForm() {
  // Menampilkan elemen error submit
  submitError.style.display = "block";
  // Memeriksa apakah validasi nama, nomor telepon, email, atau pesan gagal
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    // Menampilkan pesan error jika validasi gagal
    submitError.innerHTML = "Please fix error to submit";
    // Menyembunyikan elemen error submit setelah 3 detik
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    // Mengembalikan false untuk menunjukkan kegagalan validasi formulir
    return false;
  }
}
