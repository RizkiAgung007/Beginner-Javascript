// API Cuaca
const apiKey = "9c7b56f48c786bf6cb6a4722b4a56c9d";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Input pada saat memasukan nama kota dan search
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// Hasil dari icon cuaca suatu kota
const weatherIcon = document.querySelector(".weather-icon");

// SearchBox untuk mencari kota
searchBtn = addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Respon cuaca dalam APi
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //   Apabila kota yang dicari tidak ada maka menampilkan invalid city
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    // Icon yang muncul sesuai pada cuaca kota yang dicari
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    //   Memunculkan display ketika melakukan search
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"; 
  }
}
