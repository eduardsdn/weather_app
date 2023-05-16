function displayCurrentWeather(currentWeather) {
    const day = document.querySelector(".day")
    const date = document.querySelector(".date")
    const city = document.querySelector(".city")
    const country = document.querySelector(".country")
    const weatherConditionIcon = document.querySelector('.weather-condition-icon')
    const temperatrue = document.querySelector(".temperature-number")
    const weatherConditionText = document.querySelector('.weather-condition-text')
    const precipitation = document.querySelector(".precipitation-number")
    const humidity = document.querySelector(".humidity-number")
    const wind = document.querySelector(".wind-number")

    const weatherCard = document.querySelector(".weather-card .left")
    
    // const elementsArray =[day, date, city, country, weatherConditionIcon, temperatrue, weatherConditionText, precipitation, humidity, wind]

    // for(let i = 0; i < elementsArray.length; i++){
    //     if(elementsArray[i] === day & )
    // }
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['Jan','Feb','Mar','Ap','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let now = new Date()
    // let dayToday = now.getDay()
    // let monthToday = now.getMonth()


    day.innerText = days[now.getDay()]
    date.innerText = now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear()

    city.innerText = currentWeather.city
    country.innerText = currentWeather.country

    // currentWeather.condition = "light snow"

    temperatrue.innerText = currentWeather.temperatrue + " " + "°C"
    weatherConditionText.innerText = currentWeather.condition

   

    if(currentWeather.condition === "Sunny" || currentWeather.condition === "Clear"){
        weatherConditionIcon.src = "./assets/icons/sunny.svg"
        weatherCard.classList.remove("cloudy")
        weatherCard.classList.remove("rainy")
        weatherCard.classList.add("sunny")
    }
    else if(currentWeather.condition === "Partly cloudy" || currentWeather.condition === "Overcast" || currentWeather.condition === "Mist") {
        weatherConditionIcon.src = "./assets/icons/cloudy.svg"
        weatherCard.classList.remove("sunny")
        weatherCard.classList.remove("rainy")
        weatherCard.classList.add("cloudy")
    }
    else if(currentWeather.condition.includes("Rain") || currentWeather.condition.includes("rain") || currentWeather.condition.includes("drizzle")){
        weatherConditionIcon.src = "./assets/icons/rainy.svg"
        weatherCard.classList.toggle("rainy")
    }
    else if(currentWeather.condition.includes("snow")) {
        weatherConditionIcon.src = "./assets/icons/snowy.svg"
        weatherCard.classList.add("snowy")
    }
    // else if(currentWeather.condition === "Light rain" || currentWeather.condition === "Moderate or heavy rain with thunder" || currentWeather.condition === "Moderate or heavy rain shower") {
    //     weatherConditionIcon.src = "./assets/icons/rainy.svg"
    // }



    precipitation.innerText = currentWeather.precipitation
    humidity.innerText = currentWeather.humidity + "%"
    wind.innerText = currentWeather.wind + " " + "km/h"
    


    // console.log(city, country, date, day, temperatrue, precipitation, humidity, wind, weatherCard, weatherConditionText, weatherConditionIcon)

    console.log(currentWeather)

}


export {displayCurrentWeather}