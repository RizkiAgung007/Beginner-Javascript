// Variabel quote dan author pada tampilan
const quotes = document.getElementById("quote");
const authors = document.getElementById("author");

// Mengambil API dengan response
const api_url = "https://api.quotable.io/random";
async function getQuote(url) {
  const response = await fetch(url);
  //   Mengambil data dan mengubahnya menjadi json
  var data = await response.json();
  //   Tampilkan quote dan author
  quotes.innerHTML = data.content;
  authors.innerHTML = data.author;
}
getQuote(api_url);

// Menampilkan quote pada twitter
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quotes.innerHTML + "---- by" + authors.innerHTML, "Tweet window", "width=800, height=500"
  );
}
