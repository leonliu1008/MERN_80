// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   console.log(this.name + "說你好");
// };

// function Student(name, age, major, grade) {
//   Person.call(this, name, age); // 可以直接呼叫上面建立的Person , 然後name 與 age 就是Student的name與age
//   this.major = major;
//   this.grade = grade;
// }

// //  增加此行,就可以將 leon 變成一個function  leon=>Student=>Person
// Student.prototype = Object.create(Person.prototype); //  此行一定要在最上面
// Student.prototype.study = function () {
//   console.log(this.name + "正在努力讀" + this.major);
// };

// //  這樣還沒辦法 將leon 變成一個function
// let leon = new Student("Leon Liu", 38, "IT", 4.0);
// console.log(leon.name);
// console.log(leon.major);

// leon.sayHi(); // 這邊可以使用 Person的sayHi 是因為 有使用 Object.create
// leon.study();

/**
 * 將上面的語法 改成 class語法
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(this.name + ":說你好");
  }
}

// super => 使用super 會自動尋找 extends 的對象裡面的input
class Student extends Person {
  constructor(name, age, major, grade) {
    super(name, age);
    this.major = major;
    this.grade = grade;
  }
  study() {
    console.log(this.name + " 正在努力學習 " + this.major);
  }
}

let leon = new Student("Leon Liu", 38, "IT", 4.0);
leon.sayHi();
leon.study();
