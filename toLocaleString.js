const reversedString = str => str.split('').reverse().join('');
const repositoryRootPath = path.resolve(__dirname, '..');
var regexp  = new RegExp('{{([^}]+)}}', 'g');