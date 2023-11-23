const shuffle = (arr) => {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex != 0) {
    // 選定一個0 ~ currentIndex的隨機整數
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 將 currentIndex 與 randomIndex 互換
    let temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  console.log(arr);
  return arr;
};
