const merge = (a, b) => [...a, ...b];
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');