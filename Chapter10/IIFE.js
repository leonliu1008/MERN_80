// 好處不影響 globle naming space (就不會影響重複宣告)
(function hello() {
  console.log("hello");
})();

(function () {
  console.log("This is an IIFE!");
})();

(() => {
  console.log("This is an arrow function IIFE");
})();
