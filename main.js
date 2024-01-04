import { fetchData, getGeolocation } from "./getData.js";

let geoActive = true;
let isMetric = true;
let userInput;

const searchButton = document.querySelector(".search-button");
const changeUnitsButton = document.querySelector(".change-units");

searchButton.addEventListener("click", updateLocation);
changeUnitsButton.addEventListener("click", changeUnits);

function updateLocation() {
  const userInputField = document.querySelector(".user-input-field");
  userInput = userInputField.value;
  geoActive = false;
  fetchData(userInput);
}

function changeUnits() {
  const unitName = document.querySelector(".unit-name");

  if (isMetric === true) {
    isMetric = false;
    unitName.innerText = "metric";

    if (geoActive === true) {
      getGeolocation();
    } else {
      updateLocation(userInput);
    }
  } else {
    isMetric = true;
    unitName.innerText = "imperial";

    if (geoActive === true) {
      getGeolocation();
    } else {
      updateLocation(userInput);
    }
  }
}

getGeolocation();
export { isMetric };
