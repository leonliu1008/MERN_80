async function fetchProduct() {
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
}

////////////////////////////////////////////////////////////////////
// 將Promise寫法 轉成 async
async function fetchPromise2() {
  try {
    let response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    // console.log(fetchPromise2);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (e) {
    console.log(e);
  }
}

fetchPromise2();

////////////////////////////////////////////////////////////////////

async function myFunc() {
  return 100;
}
let result = myFunc();
console.log(result);
result.then((data) => {
  console.log(data);
});
