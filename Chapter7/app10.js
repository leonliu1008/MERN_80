localStorage.setItem("name", "Leon");
localStorage.setItem("age", "37");

let maNane = localStorage.getItem("name");
let myAge = localStorage.getItem("age");

console.log(maNane);
console.log(myAge);

// 取得Storage 正確流程
let myNum = [6, 7, 8, 16];
localStorage.setItem("myNumbers", JSON.stringify(myNum));

let arr = JSON.parse(localStorage.getItem("myNumbers"));
arr.forEach((n) => {
  console.log(n);
});

// localStorage.removeItem("name");
// localStorage.clear();
