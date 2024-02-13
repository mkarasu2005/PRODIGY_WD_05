const apikey="9c0cec5d9cc49fdaab5cf3288ffefe35";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        const weathericon=document.querySelector(".weather-icon");

        async function checkweather(city) {
            const response=await fetch(apiurl + city + `&apikey=${apikey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                var data=await response.json();
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
            if(data.weather[0].main=="Clouds"){
                weathericon.src="weather image/clouds.png"
            }
            else if(data.weather[0].main=="Mist"){
                weathericon.src="weather image/mist.png"
            }
            else if(data.weather[0].main=="Humidity"){
                weathericon.src="weather image/humidity.png"
            }
            else if(data.weather[0].main=="Snow"){
                weathericon.src="weather image/snow.png"
            }
            else if(data.weather[0].main=="Wind"){
                weathericon.src="weather image/wind.png"
            }
            else if(data.weather[0].main=="Clear"){
                weathericon.src="weather image/clear.png"
            }
            else if(data.weather[0].main=="Rain"){
                weathericon.src="weather image/rain.png"
            }
            else if(data.weather[0].main=="Dizzle"){
                weathericon.src="weather image/dizzle.png"
            }
            
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
            }
            
        }
        searchbtn.addEventListener("click",()=>{
            checkweather(searchbox.value);
        })