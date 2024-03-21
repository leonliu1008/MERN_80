console.log("start-1"); // sync

process.nextTick(function () {
  console.log("nextTick2-6");
});

setTimeout(function () {
  console.log("setTimeout-9");
});

new Promise(function (resolve, reject) {
  console.log("promise-2");
  resolve(console.log("resolve-3"));
}).then(function (result) {
  // 此時會被放到microTask
  console.log("promise then-8");
});

// IIFE
(async function () {
  console.log("async-4");
})();

setImmediate(function () {
  console.log("setImmediate-10");
});

process.nextTick(function () {
  console.log("nextTick-7");
});

console.log("end-5");
