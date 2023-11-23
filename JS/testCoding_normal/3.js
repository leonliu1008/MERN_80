const PPDI = () => {
  for (let i = 100; i <= 999; i++) {
    let unit = i % 10;
    let tens = Math.floor(i / 10) % 10;
    let hundreds = Math.floor(i / 100) % 10;

    let sum = Math.pow(unit, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3);
    if (sum == i) {
      console.log(sum);
    }
  }
};

//  找出 個位數 十位數 百位數
PPDI();
let n = 6893;
console.log(n % 10);
console.log(Math.floor(n / 10) % 10);
console.log(Math.floor(n / 100) % 100);
