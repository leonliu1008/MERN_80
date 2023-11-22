// 編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，功能是回傳一個整數，來表示array中有多少元素小於第二個參數。

const findSmallCount = (arr, num) => {
  let resule = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      resule++;
    }
  }
  return resule;
};

console.log(findSmallCount([1, 2, 1, 4], 2));
