function displayCurrentWeather(currentWeather) {
    const day = document.querySelector(".day")
    const date = document.querySelector(".date")
    const city = document.querySelector(".city")
    const country = document.querySelector(".country")
    const weatherConditionIcon = document.querySelector('.weather-condition-icon')
    const temperatrue = document.querySelector(".temperature-number")
    const weatherConditionText = document.querySelector('.weather-condition-text')
    const feelslike = document.querySelector(".feelslike-number")
    const pressure = document.querySelector(".pressure-number")
    const precipitation = document.querySelector(".precipitation-number")
    const humidity = document.querySelector(".humidity-number")
    const wind = document.querySelector(".wind-number")
    const uvindex = document.querySelector(".uvindex-number")
    const weatherCard = document.querySelector(".weather-card .left")
    
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['Jan','Feb','Mar','Ap','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let now = new Date()
    
    day.innerText = days[now.getDay()]
    date.innerText = now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear()

    city.innerText = currentWeather.city
    country.innerText = currentWeather.country

    temperatrue.innerText = currentWeather.temperatrue + " " + "°C"
    weatherConditionText.innerText = currentWeather.condition

    if(currentWeather.condition === "Sunny" || currentWeather.condition === "Clear"){
        weatherConditionIcon.src = "./assets/icons/sunny.svg"
        weatherCard.classList.remove("cloudy")
        weatherCard.classList.remove("rainy")
        weatherCard.classList.remove("snowy")
        weatherCard.classList.add("sunny")
    }
    else if(currentWeather.condition === "Partly cloudy" || currentWeather.condition === "Overcast" || currentWeather.condition === "Mist") {
        weatherConditionIcon.src = "./assets/icons/cloudy.svg"
        weatherCard.classList.remove("sunny")
        weatherCard.classList.remove("rainy")
        weatherCard.classList.remove("snowy")
        weatherCard.classList.add("cloudy")
    }
    else if(currentWeather.condition.includes("Rain") || currentWeather.condition.includes("rain") || currentWeather.condition.includes("drizzle")){
        weatherConditionIcon.src = "./assets/icons/rainy.svg"
        weatherCard.classList.remove("sunny")
        weatherCard.classList.remove("cloudy")
        weatherCard.classList.remove("snowy")
        weatherCard.classList.add("rainy")
    }
    else if(currentWeather.condition.includes("snow")) {
        weatherConditionIcon.src = "./assets/icons/snowy.svg"
        weatherCard.classList.remove("sunny")
        weatherCard.classList.remove("cloudy")
        weatherCard.classList.remove("rainy")
        weatherCard.classList.add("snowy")
    }

    feelslike.innerText = currentWeather.feelslike + "°C"
    pressure.innerText = currentWeather.pressure + " " + "mb"
    precipitation.innerText = currentWeather.precipitation + " " + "mm"
    humidity.innerText = currentWeather.humidity + "%"
    wind.innerText = currentWeather.wind + " " + "km/h"
    uvindex.innerText = currentWeather.uvindex
}


export {displayCurrentWeather}