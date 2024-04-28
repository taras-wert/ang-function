const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const minNumber = arr => Math.min(...arr);
console.log(1 +  "2" + "2");
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const merge = (a, b) => a.concat(b);