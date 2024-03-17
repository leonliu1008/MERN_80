console.log("start-1"); // sync

process.nextTick(function () {
  console.log("nextTick2-5");
});

setTimeout(function () {
  console.log("setTimeout-8");
});

new Promise(function (resolve, reject) {
  console.log("promise-2");
  resolve(console.log("resolve-2.5"));
}).then(function (result) {
  // 此時會被放到microTask
  console.log("promise then-7");
});

// IIFE
(async function () {
  console.log("async-3");
})();

setImmediate(function () {
  console.log("setImmediate-9");
});

process.nextTick(function () {
  console.log("nextTick-6");
});

console.log("end-4");
