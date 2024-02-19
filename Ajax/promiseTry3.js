const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

// 此時responses 會變成一個array
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]).then((responses) => {
  responses.forEach((response) => {
    console.log(response.url, response.status);
  });
});
