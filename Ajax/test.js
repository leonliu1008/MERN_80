// function a(i) {
//   return i > 1;
// }

// console.log(a(5));

///////////////////////////////////////////////////////

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const example = () => {
//   console.log("Start");

//   delay(1000);
//   console.log("After 1 second");

//   delay(500);
//   console.log("After another 0.5 second");

//   console.log("End");
// };

// example();

///////////////////////////////////////////////////////

// const p = new Promise((resolve) => {
//   if (true) {
//     resolve(`直接執行 Promise`);
//   }
// });

// const main = async () => {
//   data = await p;
//   console.log(data);
// };
// main();

///////////////////////////////////////////////////////

const test = (par) => {
  return new Promise((resolve, reject) => {
    // 成功
    if (par == true) {
      resolve("hello world");
    }

    //失敗
    else {
      reject(Error("發生錯誤囉!"));
    }
  });
};

test(true)
  .then((result) => console.log(result)) //hello world!!
  .catch((err) => err);

function getJSON(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
}

getJSON("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
