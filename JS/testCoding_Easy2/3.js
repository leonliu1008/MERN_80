// 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。
const isPrime = (num) => {
  if (num == 1) {
    return false;
  }

  let starter = 2;
  while (starter < num) {
    if (num % starter == 0) {
      return false;
    }
    starter++;
  }
  return true;
};

console.log(isPrime(1)); // returns false
console.log(isPrime(2));
console.log(isPrime(5)); // returns true
console.log(isPrime(91)); // returns false
console.log(isPrime(100000)); // returns false
