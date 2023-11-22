let arr = [15, 20, 22, 16, 7];

function findBiggest(arr) {
  let biggestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  }
  return biggestNumber;
}

console.log(biggestNumber);
