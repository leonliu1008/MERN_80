let arr = [1, 2, 3, 4, 5, 6, 7];

let newArray = arr.map((i) => i ** 2);

console.log(newArray);

let newArray2 = arr.forEach((i) => {
  console.log(i ** 2);
});
console.log(newArray2);

console.log("******* sort() *******");
/**
 * sort()
 */
let myArr = [1, 5, 7, 2, 3, 4, 9, 8, 6];
let mySortedArr = [...myArr]; // 如果直接執行 myArr.sort(); 這樣原始的arr也會變成 執行mathod之後的arr
mySortedArr.sort();
console.log(myArr);
console.log(mySortedArr);

let fruits = ["Apple", "Grapes", "Banana"];
fruits.sort();
console.log(fruits);

let num = [2, 7, 4, 5, 3, 9, 1];
num.sort((a, b) => {
  return a - b;
});

console.log(num);

let fruits2 = ["Watermelon", "Apple", "Grapes", "Banana"];
fruits2.sort((a, b) => {
  if (a.length > b.length) {
    return -1;
  } else {
    return 1;
  }
});
console.log(fruits2);
