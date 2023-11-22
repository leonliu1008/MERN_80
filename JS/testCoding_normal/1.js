const mySort = (arr) => {
  let maxIndex = arr.length - 1;
  while (maxIndex >= 0) {
    //  找到index 0 到 maxIndex 區間內 最大值
    let biggest = arr[0];
    let biggestIndex = 0;
    for (let i = 0; i <= maxIndex; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
        biggestIndex = i;
      }
    }

    //  將biggest 與 arr[maxIndex] 互換
    let temp = arr[biggestIndex];
    arr[biggestIndex] = arr[maxIndex];
    arr[maxIndex] = temp;

    maxIndex--;
  }
  console.log(arr);
};

mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

// let arr = [1, 2, 3, 4, 5, 6];
// let temp = arr[0];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1] = temp;
// console.log(arr);
