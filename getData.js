import { displayCurrentWeather } from "./updateElements.js";

function getGeolocation() {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  function successCallback(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=dcee8d54b0ab4a4cb1379ca7fd6abf2a`
    )
      .then(function (response) {
        let responseJSON = response.json();
        return responseJSON;
      })
      .then(function (responseJSON) {
        fetchData(responseJSON.results[0].city);
      });
  }

  function errorCallback() {
    fetchData("Brussels");
  }
}

function fetchData(userInput) {
  function weatherAtLocation(
    day,
    date,
    city,
    country,
    temperature_c,
    temperature_f,
    condition,
    feelslike_c,
    feelslike_f,
    pressure_mb,
    pressure_in,
    precipitation_mm,
    precipitation_in,
    humidity,
    visibility_km,
    visibility_miles,
    wind_kph,
    wind_mph,
    winddir,
    uvindex
  ) {
    this.day = day;
    this.date = date;
    this.city = city;
    this.country = country;
    this.temperature_c = temperature_c;
    this.temperature_f = temperature_f;
    this.condition = condition;
    this.feelslike_c = feelslike_c;
    this.feelslike_f = feelslike_f;
    this.pressure_mb = pressure_mb;
    this.pressure_in = pressure_in;
    this.precipitation_mm = precipitation_mm;
    this.precipitation_in = precipitation_in;
    this.humidity = humidity;
    this.visibility_km = visibility_km;
    this.visibility_miles = visibility_miles;
    this.wind_kph = wind_kph;
    this.wind_mph = wind_mph;
    this.winddir = winddir;
    this.uvindex = uvindex;
  }

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=6eabfbe7e9a8442e92a133724230205&q=${userInput}`
  )
    .then(function (response) {
      let responseJSON = response.json();
      return responseJSON;
    })
    .then(function (responseJSON) {
      let currentWeather = new weatherAtLocation(
        responseJSON.current.last_updated,
        responseJSON.current.last_updated,
        responseJSON.location.name,
        responseJSON.location.country,
        responseJSON.current.temp_c,
        responseJSON.current.temp_f,
        responseJSON.current.condition.text,
        responseJSON.current.feelslike_c,
        responseJSON.current.feelslike_f,
        responseJSON.current.pressure_mb,
        responseJSON.current.pressure_in,
        responseJSON.current.precip_mm,
        responseJSON.current.precip_in,
        responseJSON.current.humidity,
        responseJSON.current.vis_km,
        responseJSON.current.vis_miles,
        responseJSON.current.wind_kph,
        responseJSON.current.wind_mph,
        responseJSON.current.wind_dir,
        responseJSON.current.uv
      );
      displayCurrentWeather(currentWeather);
    })
    .catch(function () {
      alert("No matching location found");
    });
}

export { fetchData, getGeolocation };
