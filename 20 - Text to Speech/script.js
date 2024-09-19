// Buat variable dengan objek baru SpeechSynthesisUtterance untuk menyimpan teks dan pengaturan suara
let speech = new SpeechSynthesisUtterance();

// Buat array kosong untuk menyimpan suara yang tersedia
let voices = [];

// Pilih elemen dropdown suara dari dokumen HTML
let voiceSelect = document.querySelector("select");

// Dengarkan acara 'voiceschanged', yang dipicu saat daftar suara yang tersedia berubah
window.speechSynthesis.onvoiceschanged = () => {
  // Perbarui array voices dengan daftar suara saat ini
  voices = window.speechSynthesis.getVoices();

  // Atur suara awal ke suara pertama yang tersedia
  speech.voice = voices[0];

  // Itera melalui setiap suara yang tersedia
  voices.forEach(
    // Buat elemen opsi baru untuk setiap suara, dengan nama suara sebagai teks dan indeks sebagai nilai
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// Tambahkan penyuara acara 'change' ke elemen dropdown suara
voiceSelect.addEventListener("change", () => {
  // Perbarui pengaturan suara di objek SpeechSynthesisUtterance untuk cocok dengan suara yang dipilih
  speech.voice = voices[voiceSelect.value];
});

// Pilih elemen tombol dari dokumen HTML
document.querySelector("button").addEventListener("click", () => {
  // Perbarui teks di objek SpeechSynthesisUtterance untuk cocok dengan teks di textarea
  speech.text = document.querySelector("textarea").value;

  // Ucapkan teks menggunakan pengaturan suara saat ini
  window.speechSynthesis.speak(speech);
});