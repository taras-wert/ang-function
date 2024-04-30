const scriptRootPath = path.join(repositoryRootPath, 'script');
const value = ( 5 < 7 ) ? "True" : "False" ;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);