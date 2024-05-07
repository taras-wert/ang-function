console.log("1 && 2 = "+(1 && 2));
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const stringReverse = str => str.split("").reverse().join("");