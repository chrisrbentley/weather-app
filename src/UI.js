import { getWeather, reqLocation } from './getWeather';

let query;
const body = document.querySelector('body');
const myWeather = document.createElement('h1');
const main = document.createElement('main');
const form = document.createElement('form');
const input = document.createElement('input');
const submit = document.createElement('button');
const wrapper = document.createElement('div');
const location = document.createElement('h3');
const conditions = document.createElement('h4');
const temperature = document.createElement('p');
const humidity = document.createElement('p');

body.appendChild(myWeather);
body.appendChild(main);
main.appendChild(form);
main.appendChild(wrapper);
wrapper.appendChild(location);
wrapper.appendChild(conditions);
wrapper.appendChild(temperature);
wrapper.appendChild(humidity);
form.appendChild(input);
form.appendChild(submit);

input.type = 'search';
input.name = 'q';
input.id = 'q';
input.placeholder = 'Enter a city..';
submit.type = 'submit';

wrapper.id = 'wrapper';
conditions.id = 'conditions';
temperature.id = 'temperature';
humidity.id = 'humidity';

myWeather.textContent = 'myWeather';
submit.textContent = 'Submit';

function populateWrapper() {
  location.textContent = reqLocation.qLocation;
  conditions.textContent = reqLocation.conditions;
  temperature.textContent = `${reqLocation.temperature}°;
  `;
  humidity.textContent = `Humidity: ${reqLocation.humidity}%`;
}

async function submitForm() {
  query = input.value;
  await getWeather(query);
  console.log(reqLocation);
  console.log(reqLocation.temperature);
  populateWrapper();
  input.value = '';
}

form.addEventListener('submit', (e) => {
  submitForm();
  e.preventDefault();
});
