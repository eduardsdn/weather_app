import { fetchData } from './getData.js'

let isMetric = true
let userInput

const searchButton = document.querySelector(".search-button")
const changeUnitsButton = document.querySelector(".change-units")

searchButton.addEventListener('click', updateLocation)
changeUnitsButton.addEventListener('click', changeUnits)

function getLocation(){
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    function successCallback(position) {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        console.log(latitude, longitude)

        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=YOUR_API_KEY`)
    }
    function errorCallback(){
        console.log("No geo")
    }
}


function updateLocation() {
    const userInputField = document.querySelector(".user-input-field")
    userInput = userInputField.value
    fetchData(userInput)
    console.log(userInput)

}

function changeUnits() {
    const unitName = document.querySelector(".unit-name")

    if (isMetric === true){
        isMetric = false
        unitName.innerText = "metric"
        updateLocation(userInput)
    }
    else {
        isMetric = true
        unitName.innerText = "imperial"
        updateLocation(userInput)
    }
    console.log(isMetric)
}

// getLocation()
export { isMetric }





