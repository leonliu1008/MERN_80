const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;
const ctx = c.getContext("2d");
let circle_x = 160;
let circle_y = 60;
let radius = 20;
let xSpeed = 20;
let ySpeed = 20;

function drawCircle() {
  // 更動圓的座標
  circle_x += xSpeed;
  circle_y += ySpeed;
  // 畫出黑色背景(每一幀都要執行一次,不然無法覆蓋上一次的畫面)
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // 畫出圓球
  ctx.beginPath(); //為了不被上面設定影響,所以必須要使用beginPath()
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI); //(x, y, radius, startAngle, endAngle);
  ctx.stroke(); //設定完之後 一定要使用此函式來確定畫出
  ctx.fillStyle = "yellow"; //填充顏色
  ctx.fill(); //確定填充
}

let game = setInterval(drawCircle, 25);
