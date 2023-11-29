let button = document.querySelector("button");
let form = document.querySelector("form");

button.addEventListener("click", () => {
  form.reset();
});

let buttonA = document.querySelector(".btn-A");
buttonA.addEventListener("click", (e) => {
  console.log(e);
});

window.addEventListener("keydown", (e) => {
  console.log(e);
});

/**
 * Event.target
 */

let buttonB = document.querySelector(".btn-B");
buttonB.addEventListener("click", (e) => {
  console.log(e.target);
});

console.log("==========我是分隔線=========");

/**
 * 阻止Event 預設行為
 */
let formB = document.querySelector(".form-B");
formB.addEventListener("submit", (e) => {
  // 阻止Event 預設行為
  e.preventDefault();
});

/**
 * Event Bubbling
 */
let a = document.querySelector(".a");
let b = document.querySelector(".b");

a.addEventListener("click", () => {
  alert("紅色框的事件監聽器正在被執行");
});

//  Event Bubbling 呈現
// b.addEventListener("click", () => {
//   alert("藍色框的事件監聽器正在被執行");
// });

//  解決方式
b.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("藍色框的事件監聽器正在被執行");
});
