const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;
const ctx = c.getContext("2d");
let circle_x = 160;
let circle_y = 60;
let radius = 20;
let xSpeed = 20;
let ySpeed = 20;
let ground_x = 100;
let ground_y = 500;
let ground_height = 15;
let brickArray = [];

// 製作隨機數值小技巧:min~max的隨機值(假設min100, max500)
function getRandomArbitrary(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

// 製作一個畫方塊的物件
class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    /**
     * 檢查是否和已存在的磚塊重疊
     * 進入迴圈之前會先執行函式,看函式回應true or false
     * 來判斷是否執行while
     */
    while (this.isOverlapping()) {
      this.x = getRandomArbitrary(0, 950);
      this.y = getRandomArbitrary(0, 450);
    }
    brickArray.push(this);
  }
  // 檢查是否和已存在的磚塊重疊的方法
  isOverlapping() {
    for (const brick of brickArray) {
      if (
        this.x < brick.x + brick.width &&
        this.x + this.width > brick.x &&
        this.y < brick.y + brick.height &&
        this.y + this.height > brick.y
      ) {
        return true; // 重疊
      }
    }
    return false; // 不重疊
  }
  drawBrick() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// 用for 製作所有的磚塊
for (let i = 0; i < 10; i++) {
  new Brick(getRandomArbitrary(0, 950), getRandomArbitrary(0, 450));
}
console.log(brickArray);
// 觸發滑鼠一定事件
c.addEventListener("mousemove", (e) => {
  // 將反擊板的 x 隨著滑鼠移動
  ground_x = e.clientX;
});

function drawCircle() {
  // 確認球是否接觸反擊板
  if (
    circle_x >= ground_x - radius &&
    circle_x <= ground_x + 200 + radius &&
    circle_y >= ground_y - radius &&
    circle_y <= ground_y + 10 + radius
  ) {
    // 下面有確認邊撞擊邊界公式,所以可以使用ySpeed的正負值來確認球目前是往上還是往下
    if (ySpeed > 0) {
      circle_y -= 50; // y-40 =>向上移40
    } else {
      circle_y += 50;
    }
    ySpeed *= -1;
  }
  if (circle_x >= canvasWidth) {
    // 確認球有沒有打到邊界
    // // 確認右邊邊界
    xSpeed *= -1;
  }
  // 確認左邊邊界
  if (circle_x <= radius) {
    xSpeed *= -1;
  }
  // 確認上邊邊界
  if (circle_y <= radius) {
    ySpeed *= -1;
  }
  // 確認下邊邊界
  if (circle_y >= canvasHeight) {
    ySpeed *= -1;
  }
  // 更動圓的座標(xSpeed,ySpeed 會一直讓球的圓心++)
  circle_x += xSpeed;
  circle_y += ySpeed;

  // 畫出黑色背景(每一幀都要執行一次,不然無法覆蓋上一次的畫面)
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  // ***黑色背景完成,以下開始畫物件***

  //畫出磚塊
  brickArray.forEach((brick) => {
    brick.drawBrick();
  });

  // 畫出反擊板
  ctx.beginPath(); //為了不被上面設定影響,所以必須要使用beginPath()
  ctx.fillStyle = "white";
  ctx.fillRect(ground_x, ground_y, 200, ground_height);

  // 畫出圓球
  ctx.beginPath(); //為了不被上面設定影響,所以必須要使用beginPath()
  // x+y=圓心座標 radius=半徑
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI); //(x, y, radius, startAngle, endAngle);
  ctx.stroke(); //設定完之後 一定要使用此函式來確定畫出
  ctx.fillStyle = "yellow"; //填充顏色
  ctx.fill(); //確定填充
}

let game = setInterval(drawCircle, 25);
