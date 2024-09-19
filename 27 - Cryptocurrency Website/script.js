// Mendapatkan elemen HTML untuk Bitcoin, Ethereum, dan Dogecoin
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

// Membuat konfigurasi untuk permintaan API
var settings = {
 async: true, // Mengaktifkan operasi asynchronous
 crossDomain: true, // Memungkinkan permintaan cross-domain
 url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd", // Endpoint API
 method: "GET", // Menggunakan metode GET
 headers: {}, // Tidak ada header custom
};

// Mengirim permintaan API dan menangani respons
$.ajax(settings).done(function (response) {
 // Memperbarui elemen HTML dengan respons API untuk setiap cryptocurrency
 btc.innerHTML = response.bitcoin.usd;
 eth.innerHTML = response.ethereum.usd;
 doge.innerHTML = response.dogecoin.usd;
});