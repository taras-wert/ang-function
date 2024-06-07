const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
function myAPITS(someString: string, someNum: number) { ... };
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());