// 錯誤範例
function multuply(a, b) {
  console.log(a); // 沒給足夠 會顯示 undefined
  return a * b;
}
console.log(multuply()); // 會顯示NaN

/**
 * default Parameter
 */
console.log("***************************");
function multuply2(a = 1, b = 1) {
  console.log(a);
  return a * b;
}
console.log(multuply2(10));
console.log(multuply2());
