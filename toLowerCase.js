console.log(false == '0');
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const merge = (a, b) => [...a, ...b];
const stringReverse = str => str.split("").reverse().join("");
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);