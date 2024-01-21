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

let d = "Right"; // 蛇剛開始的初始方向

/**
 * 使用 window.addEventListener 控制蛇的上下左右
 */

window.addEventListener("keydown", changeDirection);
function changeDirection(e) {
  if (e.key == "ArrowLeft" && d != "Right") {
    // console.log("你按下往左鍵");
    d = "Left";
  } else if (e.key == "ArrowRight" && d != "Left") {
    // console.log("你按下往右鍵");
    d = "Right";
  } else if (e.key == "ArrowUp" && d != "Down") {
    // console.log("你按下往上鍵");
    d = "Up";
  } else if (e.key == "ArrowDown" && d != "Up") {
    // console.log("你按下往下鍵");
    d = "Down";
  }
}

/**
 * memo
 * snake.pop()
 * direction = 上下左右
 * if direction == Right ,頭x += unit
 * if direction == Down ,頭y += unit
 * if direction == Up , 頭y -= unit
 * if direction == left, 頭x -= unit
 */

function draw() {
  //  背景全設定為黑色
  ctx.fillStyle = "black"; //設定填充顏色為黑色
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //  以下畫出蛇,背景(蛇的身體)設定完之後
  // console.log("正在執行draw...");
  for (let i = 0; i < snake.length; i++) {
    //當array是0的時候 就設定顏色(蛇的頭)
    if (i == 0) {
      ctx.fillStyle = "lightgreen";
    } else {
      ctx.fillStyle = "lightblue";
    }
    ctx.strokeStyle = "white"; // 設定外匡顏色(必須先設定外匡)

    // 穿牆功能:
    if (snake[i].x >= canvas.width) {
      snake[i].x = 0;
    }
    if (snake[i].x < 0) {
      snake[i].x = canvas.width - unut;
    }
    if (snake[i].y >= canvas.height) {
      snake[i].y = 0;
    }
    if (snake[i].y < 0) {
      snake[i].y = canvas.height - unut;
    }

    // x, y, width, height
    ctx.fillRect(snake[i].x, snake[i].y, unut, unut);
    ctx.strokeRect(snake[i].x, snake[i].y, unut, unut); // 設定外匡
  }

  //  以目前的d變數方向,來決定蛇的下一幀要放到哪個座標
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  if (d == "Left") {
    snakeX -= unut;
  } else if (d == "Up") {
    snakeY -= unut;
  } else if (d == "Right") {
    snakeX += unut;
  } else if (d == "Down") {
    snakeY += unut;
  }

  // 宣告新的頭位置"物件",來接受上面算好的x y的值
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  /**
   * memo
   * 蛇吃到果實 => snake.unshift()
   * 沒吃到果實 => snake.pop(), snake.unshift() ->移出最後一個陣列數值,再增加在頭一個陣列數值
   */
  //  確認蛇是否吃到果實
  snake.pop();
  snake.unshift(newHead);
}

let myGame = setInterval(draw, 100); //  每0.1秒執行一次 function
