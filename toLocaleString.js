console.log("0 || 1 = "+(0 || 1));
console.log(1 +  +"2" + "2");
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));