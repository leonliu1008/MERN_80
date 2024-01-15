const addUpto = (n) => {
  if (n == 1) {
    return 1;
  }

  // console.log(n + addUpto(n - 1));
  console.log("--------------");
  return n + addUpto(n - 1);
};
addUpto(5);
