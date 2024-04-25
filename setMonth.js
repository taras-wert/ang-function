const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
console.log(+"1" +  "1" + "2");
const isEmptyArray = arr => !arr.length;
console.log(false === '0');
const channelName = getChannelName(channel);