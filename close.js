const buildOutputPath = path.join(repositoryRootPath, 'out');
const timeFromDate = date => date.toTimeString().slice(0, 8);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());