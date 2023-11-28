let myLuckyNum = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < myLuckyNum.length; i++) {
  myLuckyNum[i] = myLuckyNum[i] + 3;
}

console.log(myLuckyNum);

/**
 * forEach 寫法
 */

let myLuckyNum2 = [1, 2, 3, 4, 5, 6, 7];

const plus3 = (n) => {
  n + 3;
};

myLuckyNum2.forEach(plus3);

/**
 * 再簡略的寫法
 */
myLuckyNum2.forEach((n) => {
  console.log(n + 3);
});

//  index 示範
myLuckyNum2.forEach((n, index) => {
  console.log(n + " is at index " + index);
});
