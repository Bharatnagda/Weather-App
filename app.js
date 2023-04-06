const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4620e3d075msh1a1b4d9647d5af8p1a1259jsnba3639288fb1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city) => {
    cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp + "°C";
      humidity.innerHTML = response.humidity + "%";
      //         feels_like.innerHTML = response.feels_like;
      //         min_temp.innerHTML = response.min_temp;
      //         max_temp.innerHTML = response.max_temp;
              wind_speed.innerHTML = response.wind_speed + "km/h";
      //         wind_degrees.innerHTML = response.wind_degrees;
      // sunrise.innerHTML = response.sunrise;
      // sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click",(e)=>{
    getweather(city.value);
})

getweather("Udaipur");
// const apikey = "fe1ffcbf8c7b07a16f10b11272277d45"
// const appurl = "https://api.openweathermap.org/data/2.5/weather?q=rajasthan"

// async function checkweather(){
//     const response = await fetch(appurl+`&appid=${apikey}` );
//     var data = await response.json();
//     console.log(data);
// }
// checkweather();

