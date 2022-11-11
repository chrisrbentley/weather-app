/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");


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
  location.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.reqLocation.qLocation;
  conditions.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.reqLocation.conditions;
  temperature.textContent = `${_getWeather__WEBPACK_IMPORTED_MODULE_0__.reqLocation.temperature}°;
  `;
  humidity.textContent = `Humidity: ${_getWeather__WEBPACK_IMPORTED_MODULE_0__.reqLocation.humidity}%`;
}

async function submitForm() {
  query = input.value;
  await (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(query);
  console.log(_getWeather__WEBPACK_IMPORTED_MODULE_0__.reqLocation);
  console.log(_getWeather__WEBPACK_IMPORTED_MODULE_0__.reqLocation.temperature);
  populateWrapper();
  input.value = '';
}

form.addEventListener('submit', (e) => {
  submitForm();
  e.preventDefault();
});


/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "reqLocation": () => (/* binding */ reqLocation)
/* harmony export */ });
// eslint-disable-next-line import/no-mutable-exports
let reqLocation;

async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=7a6a3e9c8867bc5ec1c7bac3aea201d9&units=imperial`,
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
}




/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> @import url('https://fonts.googleapis.com/css2?family=Sono:wght@300;400;700&display=swap');\n| \n| body {");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map