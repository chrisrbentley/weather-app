(()=>{var e={306:()=>{!async function(e){const t=await fetch("http://api.openweathermap.org/data/2.5/weather?q=atlanta&limit=5&appid=7a6a3e9c8867bc5ec1c7bac3aea201d9&units=imperial",{mode:"cors"}),a=await t.json();console.log(a),console.log(a.main,a.weather);class o{constructor(e,t,a,o){this.location=e,this.temperature=t,this.feelsLike=a,this.forecast=o}}!async function(){const e=a.name,t=a.main.temp,r=a.main.feels_like,n=a.weather[0].description,i=new o(e,t,r,n);console.log(i)}()}()}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";a(306)})()})();