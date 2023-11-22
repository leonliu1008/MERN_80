const factorPrime = (n) => {
  let answer = n + " = ";
  let p = 2;

  while (p <= n) {
    if (n % p == 0) {
      n /= p;
      answer += p + " x ";
    } else {
      p++;
    }
  }
  console.log(answer);
};

factorPrime(120);
