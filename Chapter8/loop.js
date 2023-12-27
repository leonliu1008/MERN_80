// console.log("1.");
// let num = [10, 20, 30];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// console.log("2.");

// num.forEach((n) => {
//   console.log(n);
// });

// console.log("3.");
// for (n of num) {
//   console.log(n);
// }

let myString = "Kathy";
// for of  可以直接取得 陣列裡面的值   ps.不能執行object
for (let i of myString) {
  console.log(i);
}

let Leon = {
  name: "Leon",
  Age: 37,
  Gender: "Male",
};
// for in  對於object 是取得keys
for (let property in Leon) {
  console.log(property);
}
// 使用for in  取得object 的keyValue
for (let property in Leon) {
  console.log(Leon[property]);
}
