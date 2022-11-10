import { getWeather, reqLocation } from './getWeather';

let query;
const body = document.querySelector('body');
const myWeather = document.createElement('h1');
const form = document.createElement('form');
const input = document.createElement('input');
const submit = document.createElement('button');
const wrapper = document.createElement('div');
const location = document.createElement('h3');
const conditions = document.createElement('h4');
const temperature = document.createElement('p');
const feelsLike = document.createElement('p');

body.appendChild(myWeather);
body.appendChild(form);
body.appendChild(wrapper);
wrapper.appendChild(location);
wrapper.appendChild(conditions);
wrapper.appendChild(temperature);
wrapper.appendChild(feelsLike);
form.appendChild(input);
form.appendChild(submit);

input.type = 'search';
input.name = 'q';
input.id = 'q';
input.placeholder = 'Enter a location..';
submit.type = 'submit';

wrapper.id = 'wrapper';

myWeather.textContent = 'myWeather';
submit.textContent = 'Submit';

function populateWrapper() {
  location.textContent = reqLocation.qLocation;
  conditions.textContent = reqLocation.conditions;
  temperature.textContent = reqLocation.temperature;
  feelsLike.textContent = `Feels like ${reqLocation.feelsLike}`;
}

async function submitForm() {
  query = input.value;
  await getWeather(query);
  console.log(reqLocation);
  console.log(reqLocation.temperature);
  populateWrapper();
}

form.addEventListener('submit', (e) => {
  submitForm();
  e.preventDefault();
});
