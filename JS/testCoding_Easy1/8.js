const stars = (num) => {
  printStars = "";
  for (let i = 0; i < num; i++) {
    printStars += "*";
    console.log(printStars);
  }
};

stars(5);
