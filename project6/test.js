let brickArray = [];

class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    brickArray.push(this);
  }
}

// 創建兩個 Brick 物件
let brick1 = new Brick(10, 20);
let brick2 = new Brick(30, 40);
let brick3 = new Brick(20, 20);

console.log(brickArray);
