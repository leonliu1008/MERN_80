let age = 12;
let price;

if (age < 18) {
  price = 50;
} else {
  price = 150;
}
console.log(price);
/**
 * ternaryOperator
 */
age < 18 ? 50 : 150;
let price2 = age < 18 ? 50 : 150;
console.log(price2);

console.log("***************");
const isRaining = true;

const weatherMessage = isRaining ? "Bring an umbrella" : "Enjoy the sunshine";

console.log(weatherMessage);

console.log("**************************");
const username = "Leon";

const greeting = username ? `Hello, ${username}` : "Hello, guest";

console.log(greeting);
