const executableName = getExecutableName(channel, appName);
const result = await makeHttpRequest(url);
const flattenedArray = arr => [].concat(...arr);