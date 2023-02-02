const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
const newName = document.getElementById("city");
const cityName = localStorage.getItem('city');
const Search = document.getElementById("search")
const SearchBtn = document.getElementById("searchbtn")
const News = document.getElementById('news')



function GetInfo(city) {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            result.innerHTML = `
     <div class="right">
    <h3>${city}</h3>
    <div class="right-child">
    <img src=http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png class="img">    
    <h2>${(data.list[0].main.temp - 273.15).toFixed(1)}&#176;</h2>   
    <h4> Feels-like: ${(data.list[0].main.feels_like - 273.15).toFixed(1)}&#176;</h4>  
    </div>
    </div>
    <div class="table">
    <table>
    <tr>
    <td>Pressure</td>
    <td>${data.list[0].main.pressure} mb</td>
    </tr>
    <tr>
    <td>Humidity</td>
    <td>${data.list[0].main.humidity}%</td>
    </tr>
    <tr>
    <td>Wind</td>
    <td>${data.list[0].wind.speed} km/h</td>
    </tr>
    </table> 
    <table class="table2">
    <tr>
    <td>Min-Temp</td>
    <td>${(data.list[0].main.temp_min - 273.15).toFixed(1)}&#176;</td>
    </tr>
    <tr>
    <td>Max-temp</td>
    <td>${(data.list[0].main.temp_max - 273.15).toFixed(1)}&#176;</td>
    </tr>
    <tr>
    <td>Weather</td>
    <td>${data.list[0].weather[0].description}</td>
    </tr>
    </table> 
    </div>       
    ` ;

            currentTemp.innerHTML = `${(data.list[0].main.temp - 273.15).toFixed(1)}°`
            currentTemp.innerHTML += ` ${data.city.name}`
           

        })

        .catch(() => result.innerHTML = `<h3 class="msg">City not found</h3>`)

}

fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=2edd63edce85439fa67896574e9f29e7')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        for (let i = 0; i < 6; i++) {
            document.getElementById("newstitle" + (i + 1)).innerHTML = data.articles[i].title

        }

        for (let i = 0; i < 6; i++) {
            document.getElementById("newsdesc" + (i + 1)).innerHTML = data.articles[i].description
        }

        for (let i = 0; i < 6; i++) {
            document.getElementById("newsimg" + (i + 1)).src = data.articles[i].urlToImage
        }

        for (let i = 0; i < 6; i++) {
            document.getElementById("newstitle" + (i + 1)).addEventListener("click", e => {              
                window.open(`${data.articles[i].url}`,"_blank")               
            })
        
        }

    })




function GetDailyInfo() {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {

            for (i = 0; i < 8; i++) {
                document.getElementById("day" + (i + 1) + "Wind").innerHTML = (data.list[i].main.temp - 273.15).toFixed(1) + "°";
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for (i = 0; i < 8; i++) {
                document.getElementById("desc" + (i + 1)).innerHTML = (data.list[i].weather[0].description);
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for (i = 0; i < 8; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for (i = 0; i < 8; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
            }

            //Getting Weather Icons
            for (i = 0; i < 8; i++) {
                if (data.list[i].weather[0].description === "few clouds") {
                    document.getElementById("img" + (i + 1)).src = "./animated/cloudy-day-1.svg"

                }
                if (data.list[i].weather[0].description === "clear sky") {
                    document.getElementById("img" + (i + 1)).src = "./animated/day.svg"

                }
                if (data.list[i].weather[0].description === "scattered clouds") {
                    document.getElementById("img" + (i + 1)).src = "./animated/cloudy.svg"

                }
                if (data.list[i].weather[0].description === "broken clouds") {
                    document.getElementById("img" + (i + 1)).src = "./animated/cloudy-day-3.svg"

                }
                if (data.list[i].weather[0].description === "overcast clouds") {
                    document.getElementById("img" + (i + 1)).src = "./animated/cloudy.svg"

                }
                if (data.list[0].weather[0].description === "light rain") {
                    document.getElementById("img" + (i + 1)).src = "./animated/rainy-2.svg"

                }

            }


        })


    function CheckDay(day) {
        if (day + d.getDay() > 6) {
            return day + d.getDay() - 7;
        }
        else {
            return day + d.getDay();
        }
    }

    for (i = 0; i < 8; i++) {
        document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
    }

    getTemp();
}


function DefaultScreen() {
    GetInfo(cityName);
    getTemp();

}

if (Search) {
    Search.addEventListener("click", e => {
        console.log(Search)
        localStorage.setItem('city', city.value)
        window.location.href = "weather.html";

    })
}


if (SearchBtn) {
    SearchBtn.addEventListener("click", e => {
        GetInfo(city.value);
        city.value = "";

    })
}

//function for deafult city weather-info

function GetCityInfo() {

    CityDelhi();
    CityMumbai();
    CityChennai();
    CityJaipur();

}

function CityDelhi() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Delhi&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            document.getElementById("city1").innerHTML = data.city.name;
            document.getElementById("cityTemp1").innerHTML = (data.list[0].main.temp - 273.15).toFixed(1) + "°";
            document.getElementById("carddesc1").innerHTML = data.list[0].weather[0].description;


            if (data.list[0].weather[0].description === "few clouds") {
                document.getElementById("img1").src = "./animated/cloudy-day-1.svg"

            }
            if (data.list[0].weather[0].description === "clear sky") {
                document.getElementById("img1").src = "./animated/day.svg"

            }
            if (data.list[0].weather[0].description === "scattered clouds") {
                document.getElementById("img1").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "broken clouds") {
                document.getElementById("img1").src = "./animated/cloudy-day-3.svg"

            }
            if (data.list[0].weather[0].description === "overcast clouds") {
                document.getElementById("img1").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "light rain") {
                document.getElementById("img1").src = "./animated/rainy-2.svg"

            }



        })
}

function CityMumbai() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Mumbai&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            document.getElementById("city2").innerHTML = data.city.name;
            document.getElementById("cityTemp2").innerHTML = (data.list[0].main.temp - 273.15).toFixed(1) + "°";
            document.getElementById("carddesc2").innerHTML = data.list[0].weather[0].description;

            if (data.list[0].weather[0].description === "few clouds") {
                document.getElementById("img2").src = "./animated/cloudy-day-1.svg"

            }
            if (data.list[0].weather[0].description === "clear sky") {
                document.getElementById("img2").src = "./animated/day.svg"

            }
            if (data.list[0].weather[0].description === "scattered clouds") {
                document.getElementById("img2").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "broken clouds") {
                document.getElementById("img2").src = "./animated/cloudy-day-3.svg"

            }
            if (data.list[0].weather[0].description === "overcast clouds") {
                document.getElementById("img2").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "light rain") {
                document.getElementById("img2").src = "./animated/rainy-2.svg"

            }

        })
}

function CityChennai() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Chennai&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {

            document.getElementById("city3").innerHTML = data.city.name;
            document.getElementById("cityTemp3").innerHTML = (data.list[0].main.temp - 273.15).toFixed(1) + "°";
            document.getElementById("carddesc3").innerHTML = data.list[0].weather[0].description;

            if (data.list[0].weather[0].description === "few clouds") {
                document.getElementById("img3").src = "./animated/cloudy-day-1.svg"

            }
            if (data.list[0].weather[0].description === "clear sky") {
                document.getElementById("img3").src = "./animated/day.svg"

            }
            if (data.list[0].weather[0].description === "scattered clouds") {
                document.getElementById("img3").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "broken clouds") {
                document.getElementById("img3").src = "./animated/cloudy-day-3.svg"

            }
            if (data.list[0].weather[0].description === "overcast clouds") {
                document.getElementById("img3").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "light rain") {
                document.getElementById("img3").src = "./animated/rainy-2.svg"

            }

        })
}

function CityJaipur() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Jaipur&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            document.getElementById("city4").innerHTML = data.city.name;
            document.getElementById("cityTemp4").innerHTML = (data.list[0].main.temp - 273.15).toFixed(1) + "°";
            document.getElementById("carddesc4").innerHTML = data.list[0].weather[0].description;

            if (data.list[0].weather[0].description === "few clouds") {
                document.getElementById("img4").src = "./animated/cloudy-day-1.svg"

            }
            if (data.list[0].weather[0].description === "clear sky") {
                document.getElementById("img4").src = "./animated/day.svg"

            }
            if (data.list[0].weather[0].description === "scattered clouds") {
                document.getElementById("img4").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "broken clouds") {
                document.getElementById("img4").src = "./animated/cloudy-day-3.svg"

            }
            if (data.list[0].weather[0].description === "overcast clouds") {
                document.getElementById("img4").src = "./animated/cloudy.svg"

            }
            if (data.list[0].weather[0].description === "light rain") {
                document.getElementById("img4").src = "./animated/rainy-2.svg"

            }

        })
}


//function for temperature,wind and humidity
function getWind() {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            for (i = 0; i < 8; i++) {
                document.getElementById("day" + (i + 1) + "Wind").innerHTML = (data.list[i].wind.speed + " km/h");
            }
        })

    btn2.style.paddingBottom = "5px";
    btn2.style.borderBottomStyle = "solid";
    btn2.style.borderBottomWidth = "3.1px";
    btn2.style.width = "fit-content";
    btn1.style.borderBottomStyle = "none";
    btn3.style.borderBottomStyle = "none";

}

function getHumidity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            for (i = 0; i < 8; i++) {
                document.getElementById("day" + (i + 1) + "Wind").innerHTML = data.list[i].main.humidity + "%";
            }
        })

    btn3.style.paddingBottom = "5px";
    btn3.style.borderBottomStyle = "solid";
    btn3.style.borderBottomWidth = "3.1px";
    btn3.style.width = "fit-content";
    btn1.style.borderBottomStyle = "none";
    btn2.style.borderBottomStyle = "none";
}

function getTemp() {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=32ba0bfed592484379e51106cef3f204')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            for (i = 0; i < 8; i++) {
                document.getElementById("day" + (i + 1) + "Wind").innerHTML = (data.list[i].main.temp - 273.15).toFixed(1) + "°";
            }
        })

    btn1.style.paddingBottom = "5px";
    btn1.style.borderBottomStyle = "solid";
    btn1.style.borderBottomWidth = "3.1px";
    btn1.style.width = "fit-content";
    btn2.style.borderBottomStyle = "none";
    btn3.style.borderBottomStyle = "none";

}

//current time
t1.innerHTML = `${d.getHours()}:${d.getMinutes()} `;



