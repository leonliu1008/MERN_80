const stars = (num) => {
  let printStars = "";
  for (let i = 0; i < num; i++) {
    printStars += "*";
    console.log(printStars);
  }
  for (let i = num - 1; i >= 1; i--) {
    printStars = "";
    for (let j = 0; j < i; j++) {
      printStars += "*";
    }
    console.log(printStars);
  }
};

stars(5);
