//  先製作公式,使用printStars(3, 1); 可以看到金字塔頂層
const printStars = (space, star) => {
  let resule = "";
  for (let i = 0; i < space; i++) {
    resule += " ";
  }
  for (let i = 0; i < star; i++) {
    resule += "*";
  }
  console.log(resule);
};

const pyramid = (k) => {
  let star = 1;
  let space = k - 1;
  while (space >= 0) {
    printStars(space, star);
    star += 2;
    space -= 1;
  }
};

pyramid(10);
//    *
//   ***
//  *****
// *******
console.log("============");
printStars(3, 1);
printStars(2, 3);
