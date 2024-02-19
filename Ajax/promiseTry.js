/**
 * 用瀏覽器打開,可以看到fetchPromise還在執行,所以使用console.log(fetchPromise);會看到還是pading狀態
 */
let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
console.log(fetchPromise);

// 所以用then來執行的話,就會先等fetch將資料送給fetchPromise,然後在console.log(data);,就不會看到pading狀態
fetchPromise.then((data) => {
  //可以檢查一次狀態,與上面的錯誤示範比對
  console.log(fetchPromise);
  console.log(data);

  const headers = data.headers;
  // 使用 Headers 類別提供的方法獲取特定標頭的值
  const contentType = headers.get("Content-Type");
  const allowMethods = headers.get("Allow");
  const status = data.status;

  // 在控制台上輸出標頭信息
  console.log("Content-Type:", contentType);
  console.log("Allow:", allowMethods);
  console.log("狀態:", status);
});

// fetchPromise
//   .then((res) => {
//     console.log("****************************************************");
//     /**
//      * data -> JSON
//      * 因為.json method is also async,所以還要在一次.then
//      * return Promise object
//      */
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// 上面演變成下面 使用箭頭函式 直接去大括號,可以不寫retutn,直接默認讓最下面的data 接收res.json的return
fetchPromise
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
