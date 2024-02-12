function refreshWeather (response){
    console.log(temparature)
    let temparatureElement=document.querySelector("#temparature");
    let temparature =response.data.temparature.curent;
    temparatureElement.innerHTML=Math.round(temparature);
    let discriptionElement=document.querySelector("#discription");
   let humidityElement=document.querySelector("#humidity");
   let windSpeedElement=document.querySelector("#wind-speed");
    

    let cityElement=document.querySelector("#city");
    discriptionElement.innerHTML=response.data.condition.discription;
    cityElement.innerHTML=response.data.city;
    humidityElement.innerHTML='${response.data.temparature.humidity}%';
    temparatureElement.innerHTML=Math.round(temparature);
    windSpeedElement.innerHTML='${response.data.wind.speed}km/h';

}

function searchCity (city){
    let apiKey='bof6afef739a369a2ca570a747e3a1ct';
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit (event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");


searchCity(searchInput.value);
}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);
searchCity("Polokwane");