
function fetchData(userInput){

    function weatherAtLocation(day, date, city, country, temperature, condition, precipitation, humidity, wind) {
        this.day = day;
        this.date = date;
        this.city = city;
        this.country = country;
        this.temperatrue = temperature;
        this.condition = condition;
        this.precipitation = precipitation;
        this.humidity = humidity;
        this.wind = wind
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=6eabfbe7e9a8442e92a133724230205&q=${userInput}`)
        .then(function(response){
            let responseJSON = response.json()
            return responseJSON
        })
        .then(function(responseJSON){
            // console.log(responseJSON)
            let currentWeather = new weatherAtLocation(responseJSON.current.last_updated, responseJSON.current.last_updated, responseJSON.location.name, responseJSON.location.country, responseJSON.current.temp_c, responseJSON.current.condition.text, responseJSON.current.precip_mm, responseJSON.current.humidity,responseJSON.current.wind_kph)

            getCurrentWeather(currentWeather)
            // console.log(currentWeather)
            
        })
        .catch(function(){
            alert("No matching location found")
        })

    // return currentWeather

}

function getCurrentWeather(currentWeather) {
    console.log(currentWeather)
    return currentWeather
}

export {fetchData, getCurrentWeather}






