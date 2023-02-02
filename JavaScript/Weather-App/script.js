const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cdd527cb90msh9828515f57b6cb5p1afb5ajsnc0fbc4bffbc1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = city => {
    console.log(city)

    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            temp.innerHTML = response.temp + "℃";
            feels_like.innerHTML = response.feels_like + "℃";

        })

        .catch(err => console.error(err));
              

}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
    city.value="";
})

const showWeather = (city) => {
    city = cityName.textContent;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            container.innerHTML += ` <div id="info" class="main"> 
        <ul id="ul" class="list-unstyled mt-3 mb-4"> 
        <li>Cloud pct : <span id="cloud_pct">${response.cloud_pct}</span></li>
        <li>Humidity : <span id="humidity">${response.humidity}</span></li>       
        <li>wind_degrees : <span id="wind_degrees">${response.wind_degrees}</span></li>
        <li>wind_speed : <span id="wind_speed">${response.wind_speed}</span></li>
        </ul>
        <button id="btn1" class="btn1">Close</button>
        </div>`;

        })

        .catch(err => console.error(err));    
}


container.addEventListener('click',e=>{
    if(e.target.classList.contains("btn1")){
        container.removeChild(info);
    }
    if(e.target.classList.contains("btn")){
        e.preventDefault();   
        showWeather(city.value)
    }
})

getWeather("Delhi")

