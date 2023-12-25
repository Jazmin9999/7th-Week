function changeCityName(response){
    response.preventDefault();
    let searchInputElement = document.querySelector("#search-box");
    let ciytNameElement = document.querySelector("#city-name");
    ciytNameElement.innerHTML = searchInputElement.value;
}
let formElement = document.querySelector("#weather-form");
formElement.addEventListener("submit",changeCityName)
