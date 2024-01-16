class Circle {
  static allCircle = [];

  constructor(radius) {
    this.radius = radius;
    //作用是目前正在使用Circle,然後添加到 allCircle 陣列中
    Circle.allCircle.push(this);
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  gerPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  static getAreaFormula() {
    return "圓面積公式為pi * r * r";
  }
  static getAllCircleArea() {
    let total = 0;
    Circle.allCircle.forEach((circle) => {
      total += circle.getArea();
    });
    return total;
  }
}

let c1 = new Circle(8);
console.log(c1.getArea());
let c2 = new Circle(8);
console.log(c2.getArea());
let c3 = new Circle(8);
console.log(c3.getArea());
console.log(Circle.getAllCircleArea());
