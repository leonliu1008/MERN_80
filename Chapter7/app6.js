let myButton = document.querySelector("#my-btn");

myButton.addEventListener("click", () => {
  alert("你點擊了botton");
});

let body = document.querySelector("body");

//  document object
let myH1 = document.createElement("h1");
//  innerHTML, innerText
myH1.innerHTML = "<a href='https://www.google.com'>Google</a>";
body.appendChild(myH1);
// myH1.innerText = "<a>這是我的h1</a>";
// body.appendChild(myH1);
