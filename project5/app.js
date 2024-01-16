const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//  getContext() method會回傳一個canvas的drawing context
//  drawing context 可以用來在canvas內畫圖
const unut = 20; //  蛇的每一格大小
const row = canvas.height / unut; // 320 / 20 (320是依據 html設定height="320px")
const column = canvas.width / unut; // 320 / 20 (320是依據 html設定width="320px")

let snake = []; //  array中 每個元素都是一個物件
//  物件的工作是,儲存身體的x, y座標
snake[0] = {
  x: 80,
  y: 0,
};
snake[1] = {
  x: 60,
  y: 0,
};
snake[2] = {
  x: 40,
  y: 0,
};
snake[3] = {
  x: 20,
  y: 0,
};

for (let i = 0; i < snake.length; i++) {
  //當array是0的時候 就設定顏色(蛇的頭)
  if (i == 0) {
    ctx.fillStyle = "lightgreen";
  } else {
    ctx.fillStyle = "lightblue";
  }
  ctx.strokeStyle = "white"; // 設定外匡顏色(必須先設定外匡)
  // x, y, width, height
  ctx.fillRect(snake[i].x, snake[i].y, unut, unut);
  ctx.strokeRect(snake[i].x, snake[i].y, unut, unut); // 設定外匡
}
