let a = document.querySelector("a");

console.log(a.getAttribute("title"));

let button = document.querySelector("button");
button.addEventListener("click", () => {
  let a = document.querySelector("a");
  a.remove();
});

let buttonB = document.querySelector(".btn-B");
// buttonB.style.backgroundColor = "pink";
// buttonB.style.color = "white";
//  以下直接使用 css 程式碼
buttonB.style = "background-color: pink; color: white";

console.log(button);
console.log(buttonB);
