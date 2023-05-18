import { displayCurrentWeather } from "./updateElements.js";

function fetchData(userInput){

    function weatherAtLocation(day, date, city, country, temperature, condition, feelslike, pressure, precipitation, humidity, wind, uvindex) {
        this.day = day;
        this.date = date;
        this.city = city;
        this.country = country;
        this.temperatrue = temperature;
        this.condition = condition;
        this.feelslike = feelslike;
        this.pressure = pressure
        this.precipitation = precipitation;
        this.humidity = humidity;
        this.wind = wind
        this.uvindex = uvindex
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=6eabfbe7e9a8442e92a133724230205&q=${userInput}`)
        .then(function(response){
            let responseJSON = response.json()
            return responseJSON
        })
        .then(function(responseJSON){
            // console.log(responseJSON)
            let currentWeather = new weatherAtLocation(responseJSON.current.last_updated, responseJSON.current.last_updated, responseJSON.location.name, responseJSON.location.country, responseJSON.current.temp_c, responseJSON.current.condition.text, responseJSON.current.feelslike_c, responseJSON.current.pressure_mb ,responseJSON.current.precip_mm, responseJSON.current.humidity,responseJSON.current.wind_kph, responseJSON.current.uv)

            console.log(currentWeather)
            console.log(responseJSON)

            displayCurrentWeather(currentWeather)
            
        })
        .catch(function(){
            alert("No matching location found")
        })

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=6eabfbe7e9a8442e92a133724230205&q=${userInput}&days=4&aqi=no&alerts=no`)
        .then(function(response){
            let responseForecastJSON = response.json()
            return responseForecastJSON
        })
        .then(function(responseForecastJSON){
            let forecastDaysArray = []

            for(let i = 0; i < responseForecastJSON.forecast.forecastday.length; i++){
                let forecastDay = new weatherAtLocation(responseForecastJSON.forecast.forecastday[i].date, responseForecastJSON.forecast.forecastday[i].date, responseForecastJSON.location.name, responseForecastJSON.location.country, responseForecastJSON.forecast.forecastday[i].day.avgtemp_c, responseForecastJSON.forecast.forecastday[i].day.condition.text, responseForecastJSON.forecast.forecastday[i].day.totalprecip_mm, responseForecastJSON.forecast.forecastday[i].day.avghumidity, responseForecastJSON.forecast.forecastday[i].day.avghumidity, responseForecastJSON.forecast.forecastday[i].day.maxwind_kph)

                forecastDaysArray.push(forecastDay)
            }
            
            // console.log(forecastDaysArray)

            // console.log(responseForecastJSON)
        })

}

export {fetchData}






