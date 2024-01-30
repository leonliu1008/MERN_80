let array = [1, 2, 3, 4, 5, 6, 7];

let [a1, a2, a3, a4, a5, a6, a7] = array;
console.log(a1, a2);

console.log("***********************************");

const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(fourth); // 4

console.log("***********************************");

let arr = [500, 600, 700, 800, 900];
let [b1, b2, b3, ...everything] = arr;
console.log(b1, b2, b3, everything);

console.log("***********************************");
let Leon = {
  name: "Leon Liu",
  age: 38,
  address: "Taiwan",
  height: 171,
  weight: 70,
};
let { address, height, weight } = Leon;
console.log(address, height, weight);
