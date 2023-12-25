let myName = "Leon"; // string primitive data type
let myName2 = new String("Leon"); // 比較消耗RAM
console.log(typeof myName);
console.log(typeof myName2);

console.log("*******分隔線********");
const { performance } = require("perf_hooks");
let startTime = performance.now();

for (let i = 0; i < 10000000; i++) {
  let a = new String("gjrlekjglqejglejgrwkjgpwor");
}
let endTime = performance.now();
let timeDiff = endTime - startTime;
console.log("一千萬是的String wrapper object製作需要" + timeDiff);

startTime = performance.now();
for (let i = 0; i < 10000000; i++) {
  let a = "gjrlekjglqejglejgrwkjgpwor";
}
endTime = performance.now();
timeDiff = endTime - startTime;
console.log("一千萬是的String 宣告需要" + timeDiff);
