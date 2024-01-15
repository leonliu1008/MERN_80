/**
 *  共享屬性
 */

function Animal(name) {
  this.name = name;
}

// 在原型上添加method
Animal.prototype.sleep = function () {
  console.log(this.name + " is sleeping");
};

function Cat(name, color) {
  Animal.call(this, name); // 調用父類構造函数
  this.color = color;
}

// 設置子類的原型为父類
Cat.prototype = Object.create(Animal.prototype);

// 在子類的原型上增加額外的method
Cat.prototype.meow = function () {
  console.log("Meow!");
};

// 建立對象
let myCat = new Cat("Whiskers", "Gray");

// 共享父類和子類方法
myCat.sleep(); // 輸出: Whiskers is sleeping
myCat.meow(); // 輸出: Meow!

console.log("----------------------");

/**
 *  原型添加方法
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 在原型上添加方法
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// 建立對象
let person1 = new Person("John", 25);
let person2 = new Person("Jane", 30);

// 共享相同的方法
person1.sayHello(); // 輸出: Hello, my name is John
person2.sayHello(); // 輸出: Hello, my name is Jane
