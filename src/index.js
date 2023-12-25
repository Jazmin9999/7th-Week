function retrieveTemp(response){
    console.log(response.data.temperature.current);
    let temp = document.querySelector("#temp-no");
    curTemp = response.data.temperature.current
    temp.innerHTML = Math.round(curTemp);

}
function searchCity(city){
    let apiKey = "250t2994af0bo866e5541f92ce36ba87";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(retrieveTemp);
}
function changeCityName(response){
    response.preventDefault();
    let searchInputElement = document.querySelector("#search-box");
    let ciytNameElement = document.querySelector("#city-name");
    ciytNameElement.innerHTML = searchInputElement.value;
    searchCity(searchInputElement.value);
    
}
let formElement = document.querySelector("#weather-form");
formElement.addEventListener("submit",changeCityName)
