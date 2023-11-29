/**
 * 尋找子元素
 */

let body = document.querySelector("body");

// body.children is a HTMLCollection
console.log(body.children[0].children[0]);

/**
 * 尋找父元素
 */
let firstP = document.querySelector("p");
console.log(firstP.parentElement);

/**
 * 找到class and 創見新的class名稱
 */
console.log("=============我是分隔線============");
console.log(typeof firstP.classList);
console.log(firstP.classList);
firstP.classList.add("my-P2"); // 新增class:my-P2名稱

/**
 * toggle(反轉) 測試
 */
let secondP = document.querySelector(".my-secondP");
console.log(secondP.classList);
secondP.addEventListener("click", () => {
  secondP.classList.toggle("my-secondP2");
});

/**
 * contains  (有無包含)
 */
console.log(secondP.classList.contains("my-secondP"));
