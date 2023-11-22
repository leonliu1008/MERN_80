const printEvery3 = (n) => {
  let resule = 1;
  for (let i = 0; i < n; i++) {
    console.log(resule);
    resule += 3;
  }
  return resule;
};

console.log(printEvery3(29));
