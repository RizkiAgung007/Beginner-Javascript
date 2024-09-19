let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display-time");
let timer = null;

// Membuat fungsi pada stopwatch
function stopwatch() {
  /* Setiap detik akan bertambah menjadi 1 */
  seconds++;
  /* Ketika detik sudah mencapai 60, maka detik akan kembali menjadi 0 */
  if (seconds == 60) {
    seconds = 0;
    /* Dan ketika detik sudah menjadi 0, maka menit akan bertambah 1 */
    minutes++;
    /* Ketika menit sudah mencapai 60, maka menit akan kembali menjadi 0 */
    if (minutes == 60) {
      minutes = 0;
      /* Dan ketika menit sudah menjadi 0, maka jam akan bertambah 1 */
      hours++;
    }
  }
  // Membuat agar tampilan saat start 00:00:00
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  // Menampilkan waktu pada displayTIme
  display.innerHTML = h + ":" + m + ":" + s;
}

// Ketika start dimulai maka stopwatch berjalan
function watchStart() {
  //Jika timer sudah memiliki nilai
  if (timer !== null) {
    //Menghapus timer
    clearInterval(timer);
  }
  //Jika timer belum memiliki nilai membuat timer baru
  timer = setInterval(stopwatch, 1000);
}

// Fungsi stopwatch ketika di stop
function watchStop() {
  clearInterval(timer);
}
// Fungsi reset pada stopwatch
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  // ketika di reset maka tampilan akan kembali menjadi 00:00:00
  display.innerHTML = "00:00:00";
}

