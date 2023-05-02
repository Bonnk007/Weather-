const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "107eccde6emshc633e67f3fb3694p1f8345jsn3e237b764e57",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

(async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
