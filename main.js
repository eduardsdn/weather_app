import getData from './getData.js'


const searchButton = document.querySelector(".search-button")

searchButton.addEventListener('click', function(){
    const userInputField = document.querySelector(".user-input-field")
    let userInput = userInputField.value
    getData(userInput)
    console.log(userInput)
})


