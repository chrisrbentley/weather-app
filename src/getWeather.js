// eslint-disable-next-line import/no-mutable-exports
let reqLocation;

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=7a6a3e9c8867bc5ec1c7bac3aea201d9&units=imperial`,
      { mode: 'cors' },
    );
    const locationData = await response.json();
    console.log(locationData);

    class Weather {
      constructor(qLocation, temperature, humidity, conditions) {
        this.qLocation = qLocation;
        this.temperature = temperature;
        this.humidity = humidity;
        this.conditions = conditions;
      }
    }

    // eslint-disable-next-line no-inner-declarations
    function createWeatherObject() {
      const qLocation = locationData.name;
      const temperature = Math.round(locationData.main.temp);
      // eslint-disable-next-line prefer-destructuring
      const humidity = locationData.main.humidity;
      const conditions = locationData.weather[0].description;
      reqLocation = new Weather(qLocation, temperature, humidity, conditions);
      console.log(reqLocation);
    }
    createWeatherObject();
  } catch (error) {
    console.log('ERROR!');
    alert('Please enter a valid city.');
  }
}

export { getWeather, reqLocation };
