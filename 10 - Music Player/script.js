// Variable content 1
let prog = document.getElementById("progress");
let songs = document.getElementById("song");
let play = document.getElementById("play-icon");
// Variable content 2
let prog1 = document.getElementById("progress1");
let songs1 = document.getElementById("song1");
let play1 = document.getElementById("play-icon1");
// Variable content 3
let prog2 = document.getElementById("progress2");
let songs2 = document.getElementById("song2");
let play2 = document.getElementById("play-icon2");

// Menambahkan lagu 1
songs.onloadedmetadata = function () {
  prog.max = songs.duration;
  prog.value = songs.currentTime;
};

// Menambahkan lagu 2
songs1.onloadedmetadata = function () {
  prog1.max = songs1.duration;
  prog1.value = songs1.currentTime;
};

// Menambahkan lagu 3
songs2.onloadedmetadata = function () {
  prog2.max = songs2.duration;
  prog2.value = songs2.currentTime;
};

// Menjalankan lagu 1
function playPause() {
  // Menjeda dan memutar lagu
  if (play.classList.contains("fa-pause")) {
    songs.pause(); /* jika lagu dipause maka icon pause akan menjadi remove */
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  } else {
    songs.play(); /* jika lagu diplay maka icon play akan menjadi remove */
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
  }
}

// Menjalanka lagu 2
function playPause1() {
  // Menjeda dan memutar lagu
  if (play1.classList.contains("fa-pause")) {
    songs1.pause(); /* jika lagu dipause maka icon pause akan menjadi remove */
    play1.classList.remove("fa-pause");
    play1.classList.add("fa-play");
  } else {
    songs1.play(); /* jika lagu diplay maka icon play akan menjadi remove */
    play1.classList.add("fa-pause");
    play1.classList.remove("fa-play");
  }
}

// Menjalanka lagu 3
function playPause2() {
  // Menjeda dan memutar lagu
  if (play2.classList.contains("fa-pause")) {
    songs2.pause(); /* jika lagu dipause maka icon pause akan menjadi remove */
    play2.classList.remove("fa-pause");
    play2.classList.add("fa-play");
  } else {
    songs2.play(); /* jika lagu diplay maka icon play akan menjadi remove */
    play2.classList.add("fa-pause");
    play2.classList.remove("fa-play");
  }
}

// Membuat prog berjalan 1
if (songs.play()) {
  setInterval(() => {
    prog.value = songs.currentTime;
  }, 500);
}

// Membuat prog berjalan 2
if (songs1.play()) {
  setInterval(() => {
    prog1.value = songs1.currentTime;
  }, 500);
}

// Membuat prog berjalan 3
if (songs2.play()) {
  setInterval(() => {
    prog2.value = songs2.currentTime;
  }, 500);
}

// Menyinkronkan prog dengan song 1
prog.onchange = function () {
  songs.play();
  songs.currentTime = prog.value;
  play.classList.add("fa-pause");
  play.classList.remove("fa-play");
};

// Menyinkronkan prog dengan song 2
prog1.onchange = function () {
  songs1.play();
  songs1.currentTime = prog1.value;
  play1.classList.add("fa-pause");
  play1.classList.remove("fa-play");
};

// Menyinkronkan prog dengan song 3
prog2.onchange = function () {
  songs2.play();
  songs2.currentTime = prog2.value;
  play2.classList.add("fa-pause");
  play2.classList.remove("fa-play");
};
