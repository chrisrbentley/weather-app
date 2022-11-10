// eslint-disable-next-line import/no-mutable-exports
let myObj;

async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=7a6a3e9c8867bc5ec1c7bac3aea201d9&units=imperial`,
    { mode: 'cors' },
  );
  const locationData = await response.json();
  console.log(locationData);
  console.log(locationData.main, locationData.weather);

  class Weather {
    constructor(qLocation, temperature, feelsLike, forecast) {
      this.qLocation = qLocation;
      this.temperature = temperature;
      this.feelsLike = feelsLike;
      this.forecast = forecast;
    }
  }

  async function createWeatherObject() {
    const qLocation = locationData.name;
    const temperature = Math.round(locationData.main.temp);
    const feelsLike = Math.round(locationData.main.feels_like);
    const forecast = locationData.weather[0].description;
    myObj = new Weather(qLocation, temperature, feelsLike, forecast);
    console.log(myObj);
  }
  createWeatherObject();
}

export { getWeather, myObj };
