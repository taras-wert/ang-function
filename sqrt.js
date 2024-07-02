const scriptRootPath = path.join(repositoryRootPath, 'script');
const randomString = () => Math.random().toString(36).slice(2);
const uniqueArr = (arr) => [...new Set(arr)];