async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=7a6a3e9c8867bc5ec1c7bac3aea201d9&units=imperial`,
    { mode: 'cors' },
  );
  const locationData = await response.json();
  console.log(locationData);
  console.log(locationData.main, locationData.weather);

  class Weather {
    constructor(location, temperature, feelsLike, forecast) {
      this.location = location;
      this.temperature = temperature;
      this.feelsLike = feelsLike;
      this.forecast = forecast;
    }
  }

  async function createWeatherObject() {
    const location = locationData.name;
    const temperature = locationData.main.temp;
    const feelsLike = locationData.main.feels_like;
    const forecast = locationData.weather[0].description;
    const newObj = new Weather(location, temperature, feelsLike, forecast);
    console.log(newObj);
  }
  createWeatherObject();
}
getWeather('atlanta');
