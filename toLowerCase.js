const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;