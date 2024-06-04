const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isWeekday = (date) => date.getDay() % 6 !== 0;