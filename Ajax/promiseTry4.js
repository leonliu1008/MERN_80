// 使用 Promise
// const delayWithPromise = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Inside Promise setTimeout");
//       resolve();
//     }, 1000);
//   });
// };

// console.log("Start");

// delayWithPromise().then(() => {
//   console.log("After Promise setTimeout");
// });

// console.log("End");

// 不使用 Promise
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 1000);
// console.log("End");

// 使用 Promise
// const delayWithPromise = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Inside Promise setTimeout");
//       resolve();
//     }, 1000);
//   });
// };

// console.log("Start");

// delayWithPromise().then(() => {
//   console.log("End");
// });

// 改成 async
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const example = async () => {
  console.log("Start");

  await delay(1000);
  console.log("After 1 second");

  await delay(500);
  console.log("After another 0.5 second");

  console.log("End");
};
example();

// // 改成Promise
// const delayPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// console.log("Start");

// delayPromise(1000)
//   .then(() => {
//     console.log("After 1 second");
//     return delayPromise(500);
//   })
//   .then(() => {
//     console.log("After another 0.5 second");
//     console.log("End");
//   });
