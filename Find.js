const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');