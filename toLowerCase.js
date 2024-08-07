const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const isTabInView = () => !document.hidden;