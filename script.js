const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "107eccde6emshc633e67f3fb3694p1f8345jsn3e237b764e57",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((error) => console.log(error));
