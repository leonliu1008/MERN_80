function addUpTo(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  console.log(result);
  return result;

  // 第二種算法
  // return ((1 + n) * n) / 2;
}
addUpTo(10);
