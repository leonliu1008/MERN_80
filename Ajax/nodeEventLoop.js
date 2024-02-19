console.log("star_1"); // sync

process.nextTick(function () {
  console.log("nextTick1_5");
});

setTimeout(function () {
  console.log("setTimeout_8");
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise_2");
  resolve("resolve");
}).then(function (result) {
  console.log("promise then_7");
});

// IIFE
(async function () {
  console.log("async_3");
})();

setImmediate(function () {
  console.log("setImmediate_9");
});

process.nextTick(function () {
  console.log("nextTick2_6");
});

console.log("end_4");
