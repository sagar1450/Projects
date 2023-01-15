const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cdd527cb90msh9828515f57b6cb5p1afb5ajsnc0fbc4bffbc1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=city=>{   
    console.log(city)
    cityName.innerHTML=city;
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
       
         temp.innerHTML=response.temp +"℃";
                
    })

   
	.catch(err => console.error(err));
     //return showWeather(city)
   
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})

const showWeather=(city)=>{
city=cityName.textContent;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {console.log(response)
        ul.innerHTML=`
        <li>Cloud pct : <span id="cloud_pct">${response.cloud_pct}</span></li>
        <li>Humidity : <span id="humidity">${response.humidity}</span></li>       
        <li>Min-Temp : <span id="min_temp">${response.min_temp}</span></li>
        <li>Max-Temp : <span id="max_temp">${response.max_temp}</span></li>`;

     })
      
     
   
	.catch(err => console.error(err));


        main.removeChild(btn);
   
}

btn.addEventListener('click',e=>{
    // e.preventDefault();
    //getWeather(city.value);  
     showWeather(city.value)           

      
 
})

getWeather("Delhi")
