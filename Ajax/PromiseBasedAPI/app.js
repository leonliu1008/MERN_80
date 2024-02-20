const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// return Promise object
// pending的delay秒之後 => fulfilled
// delay < 0 => rejected
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("delay不能小於0");
    } else {
      setTimeout(() => {
        resolve(person + "起床囉!!!!");
      }, delay);
    }
  });
}

// .then
// button.addEventListener("click", (e) => {
//   let promiseObject = alarm(name.value, delay.value);
//   promiseObject
//     .then((message) => {
//       //message = alarm裡面return的值(resolve)
//       output.innerHTML = message;
//     })
//     .catch((e) => {
//       //e = alarm裡面return的值(reject)
//       output.innerHTML = e;
//     });
// });

// 改成async
button.addEventListener("click", async () => {
  // 因為使用await 所以不會回傳Promise物件,而是直接回resolve 或 reject
  // 所以需要使用 try
  // let promiseObject = await alarm(name.value, delay.value);
  try {
    let result = await alarm(name.value, delay.value);
    output.innerHTML = result;
  } catch (e) {
    output.innerHTML = e;
  }
});
