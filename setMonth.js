const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');