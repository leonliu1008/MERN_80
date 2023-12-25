//  複製 array
//  copy by reference
const arr = [1, 2, 3];
const arr2 = arr;
arr2[0] = 9;

console.log(arr);
console.log(arr2);

console.log("******分隔線*******");
//  複製array 避免copy by reference
const arr3 = [1, 2, 3];
const arr4 = [...arr3];

arr4.push(4);
console.log(arr3);
console.log(arr4);

console.log("******分隔線*******");
//  array concat
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];

console.log([...arr5, ...arr6]);

console.log("******分隔線*******");
const sum = (x, y, z) => {
  return x + y + z;
};
let arr7 = [1, 2, 3];
console.log("初始寫法: " + sum(arr7[0], arr7[1], arr7[2]));
console.log("Syntax: " + sum(...arr7));

console.log("******分隔線*******");
const sum2 = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
let arr8 = [1, 2, 3];
console.log("Syntax: " + sum2(10, ...arr8, 6));

/**
 * RestParameters
 */
console.log("******以下為RestParameters*******");
const sumR = (...thrArgs) => {
  console.log(thrArgs);
};
sumR(1, 2, 3, 4, 5, 6, 7);
sumR(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("******分隔線*******");
const sumR2 = (...thrArgs) => {
  let all = 0;
  for (let i = 0; i < thrArgs.length; i++) {
    all += thrArgs[i];
  }
  console.log(all);
};
sumR2(1, 2, 3, 4, 5, 6, 7);
sumR2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
