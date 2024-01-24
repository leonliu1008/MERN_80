// 定義點類別
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// 初始化點陣列
const pointArray = [];

// 碰撞檢測函數
function isOverlapping(newPoint) {
  for (const existingPoint of pointArray) {
    if (newPoint.x === existingPoint.x && newPoint.y === existingPoint.y) {
      return true; // 重疊
    }
  }
  return false; // 不重疊
}

// 製作隨機數值小技巧:min~max的隨機值(假設min100, max500)
function getRandomArbitrary(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

// 放置新點的函數
function placePoint() {
  // 隨機生成新點的位置
  const newPoint = new Point(
    getRandomArbitrary(0, 10),
    getRandomArbitrary(0, 10)
  );

  // 檢查新點是否和已存在的點重疊
  while (isOverlapping(newPoint)) {
    // 如果重疊，重新生成新點的位置
    newPoint.x = getRandomArbitrary(0, 10);
    newPoint.y = getRandomArbitrary(0, 10);
  }

  // 將新點加入陣列
  pointArray.push(newPoint);
}

// 放置多個點
for (let i = 0; i < 15; i++) {
  placePoint();
}

console.log(pointArray); // 最後的點陣列
