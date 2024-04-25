const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const apmRootPath = path.join(repositoryRootPath, 'apm');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));