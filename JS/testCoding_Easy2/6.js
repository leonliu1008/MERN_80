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

const inversePyramid = (n) => {
  let star = 2 * n - 1;
  let space = 0;
  while (star > 0) {
    printStars(space, star);
    star -= 2;
    space += 1;
  }
};

inversePyramid(4);
