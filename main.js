import { fetchData } from './getData.js'
// import { displayCurrentWeather } from './updateElements.js'


const searchButton = document.querySelector(".search-button")

searchButton.addEventListener('click', updateLocation)

function updateLocation() {
    const userInputField = document.querySelector(".user-input-field")
    let userInput = userInputField.value
    fetchData(userInput)
    console.log(userInput)

    // displayCurrentWeather(getCurrentWeather())
}





