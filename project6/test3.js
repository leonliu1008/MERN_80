class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
  }
}

// 創建一個陣列來存放 Brick 實例
let brickArray = [];

// 使用迴圈將 Brick 實例添加到陣列中
for (let i = 0; i < 5; i++) {
  let brick = new Brick(i * 60, (u = i));
  brickArray.push(brick);
}

// 使用 forEach 迴圈來印出每個 Brick 實例的 x 屬性
brickArray.forEach((brick) => {
  console.log(brick);
});
brickArray.forEach((brick) => {
  console.log(brick.x + "  " + brick.y);
});
