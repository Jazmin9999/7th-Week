function retrieveTemp(response){
    console.log(response);
    console.log(response.data.condition.description);
    let temp = document.querySelector("#temp-no");
    //updating temp
    curTemp = response.data.temperature.current
    temp.innerHTML = Math.round(curTemp);
    //updating city name
    let ciytNameElement = document.querySelector("#city-name");
    ciytNameElement.innerHTML = response.data.city;
    updateTimeDay(response);
    updateWeatherDescription(response);
    updateImage(response);

}
function updateImage(response){
    let img = document.querySelector("#temp-emoji");
    img.innerHTML = `<img src="${response.data.condition.icon_url}"/>`
}
function updateTimeDay(response){

    let dato= new Date((response.data.time)*1000);//changing to milisec
    //updating time
    console.log(response)
    let time = document.querySelector("#time");
    time.innerHTML = dato.getHours() +":"+dato.getMinutes();
    //updating days
    let days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
    let dayofWeek = document.querySelector("#day");
    dayofWeek.innerHTML=days[dato.getDay()];
}
function updateWeatherDescription(response){
    let weatherDes = document.querySelector("#description");
    weatherDes.innerHTML=response.data.condition.description;
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let humid = document.querySelector("#humidity");
    humid.innerHTML= response.data.temperature.humidity;

}
function searchCity(city){
    let apiKey = "250t2994af0bo866e5541f92ce36ba87";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(retrieveTemp);
    
}
function getCityName(response){
    response.preventDefault();
    let searchInputElement = document.querySelector("#search-box");
    console.log(searchInputElement.value + " is city name to searched")
    searchCity(searchInputElement.value);
    
}
let formElement = document.querySelector("#weather-form");
formElement.addEventListener("submit",getCityName)
searchCity("yangon");

