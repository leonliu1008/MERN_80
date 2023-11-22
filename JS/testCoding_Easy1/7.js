// 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，回傳值為array中小於第二個參數的所有"元素的總和"。

const findSmallCount = (arr, num) => {
  let resule = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      resule += arr[i];
    }
  }
  return resule;
};

console.log(findSmallCount([1, 2, 1, 4], 9));
