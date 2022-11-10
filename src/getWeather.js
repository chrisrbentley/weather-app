// eslint-disable-next-line import/no-mutable-exports
let reqLocation;

async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=7a6a3e9c8867bc5ec1c7bac3aea201d9&units=imperial`,
    { mode: 'cors' },
  );
  const locationData = await response.json();

  class Weather {
    constructor(qLocation, temperature, feelsLike, conditions) {
      this.qLocation = qLocation;
      this.temperature = temperature;
      this.feelsLike = feelsLike;
      this.conditions = conditions;
    }
  }

  function createWeatherObject() {
    const qLocation = locationData.name;
    const temperature = Math.round(locationData.main.temp);
    const feelsLike = Math.round(locationData.main.feels_like);
    const conditions = locationData.weather[0].description;
    reqLocation = new Weather(qLocation, temperature, feelsLike, conditions);
    console.log(reqLocation);
  }
  createWeatherObject();
}

export { getWeather, reqLocation };
