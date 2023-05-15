function displayCurrentWeather(currentWeather) {
    const city = document.querySelector(".city")
    const country = document.querySelector(".country")
    const date = document.querySelector(".date")
    const day = document.querySelector(".day")
    const temperatrue = document.querySelector(".temperature-number")
    const precipitation = document.querySelector(".precipitation-number")
    const humidity = document.querySelector(".humidity-number")
    const wind = document.querySelector(".wind-number")

    const weatherCard = document.querySelector(".weather-card .left")
    const weatherConditionText = document.querySelector('.weather-condition-text')
    const weatherConditioncon = document.querySelector('.weather-condition-icon')

    // console.log(city, country, date, day, temperatrue, precipitation, humidity, wind, weatherCard, weatherConditionText, weatherConditioncon)

    console.log(currentWeather)

}


export {displayCurrentWeather}