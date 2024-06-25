const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const stringReverse = str => str.split("").reverse().join("");
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());