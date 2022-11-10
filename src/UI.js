import { getWeather, myObj } from './getWeather';

let query;
const body = document.querySelector('body');
const form = document.createElement('form');
const input = document.createElement('input');
const submit = document.createElement('button');
const wrapper = document.createElement('div');
const location = document.createElement('h3');

body.appendChild(form);
body.appendChild(wrapper);
wrapper.appendChild(location);
form.appendChild(input);
form.appendChild(submit);

input.type = 'search';
input.name = 'q';
input.id = 'q';
input.placeholder = 'Enter a location..';
submit.type = 'submit';

wrapper.id = 'wrapper';

submit.textContent = 'Submit';

form.addEventListener('submit', (e) => {
  query = input.value;
  console.log(query);
  getWeather(query);
  e.preventDefault();
});
