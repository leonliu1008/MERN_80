const calc = (a, n) => {
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      s += a * Math.pow(10, j);
    }
  }
  console.log(s);
  return s;
};

calc(2, 3); //  246
calc(10, 6); //  1234560
calc(8, 5);
