const c = document.getElementById("myCanvas");
const canvasHeight = c.Height;
const canvasWidth = c.width;
const ctx = c.getContext("2d");

function drawCircle() {
  console.log("畫圓");
}

let game = setInterval(drawCircle, 25);
