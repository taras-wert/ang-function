const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const buildOutputPath = path.join(repositoryRootPath, 'out');
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");