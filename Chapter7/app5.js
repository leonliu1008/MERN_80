//  NodeList
let hellos = document.querySelectorAll(".hello");

hellos.forEach((hello) => {
  console.log(hello);
});

//  HTMLCollectuin <~~這樣會顯示error 必須使用上面的寫法
let helloss = document.getElementsByClassName("hello");
helloss.forEach((hello) => {
  console.log(hello);
});
