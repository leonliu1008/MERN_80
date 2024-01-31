/**
 * 調用父類別的建構子
 * 子類別的建構子中，通常會使用 super 來調用父類別的建構子，確保子類別繼承了父類別的屬性
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 調用父類別的建構子
    this.breed = breed;
  }
}

/**
 * 在覆寫的方法中調用父類別的同名方法
 * 當子類別覆寫了父類別的方法，有時需要在子類別的方法中調用父類別的同名方法。這樣可以確保父類別的行為仍然被執行。
 */

class Animal2 {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog2 extends Animal2 {
  speak() {
    super.speak(); // 調用父類別的 speak 方法
    console.log("Dog barks.");
  }
}

let dog2 = new Dog2();
dog2.speak();

/**
 * 在覆寫的方法中擴展父類別的行為
 * 有時希望在子類別的方法中擴展而不是完全覆寫父類別的方法。這時可以使用 super 來調用父類別的方法，然後再加入子類別的行為。
 */

class Shape {
  area() {
    console.log("Calculating area...");
  }
}

class Circle extends Shape {
  area() {
    super.area(); // 調用父類別的 area 方法
    console.log("Calculating area of circle...");
  }
}

/**
 * 進階的範例
 * 使用 super 在子類別中擴展和改進父類別的行為。
 * 假設我們有一個基礎的動物類別 Animal，並且有一個衍生的 Bird 類別。
 * 我們想要讓 Bird 類別保留 Animal 的行為，同時添加一些額外的行為。
 */

class Animal3 {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Animal makes a sound.");
  }
}

class Bird extends Animal3 {
  constructor(name, wingspan) {
    super(name);
    this.wingspan = wingspan;
  }

  makeSound() {
    super.makeSound(); // 調用父類別的 makeSound 方法
    console.log("Bird chirps.");
  }

  fly() {
    console.log(`${this.name} is flying with wingspan ${this.wingspan} units.`);
  }
}

const eagle = new Bird("Eagle", 2);

eagle.makeSound();
eagle.fly();
