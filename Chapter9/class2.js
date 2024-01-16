// function Student(name, age, major) {
//   this.name = name;
//   this.age = age;
//   this.major = major;
// }

// Student.exampleValue = 10;

// Student.exampleFunction = function(){
//     console.log("測試一個functions");
// }
// Student.prototype.sayHi() = function(){
//     console.log(this.name + ":說你好");
// }
// let leon = new Student("leon",38,"IT")

/**
 * 將上面的語法 改成 class語法(運用static)
 */

class Student {
  static exampleValue = 10; // static property
  constructor(name, age, major) {
    this.name = name; // instance property
    this.age = age; // instance property
    this.major = major; // instance property
  }
  // instance method
  sayHi() {
    console.log(this.name + ":說你好");
  }
  // static method
  static exampleFunction() {
    console.log("測試一個functions");
  }
}
let leon = new Student("leon", 38, "IT");
leon.sayHi();
// leon.exampleFunction(); //執行static 的function 會出現error

// 只有原本的Student 可以執行static
Student.exampleFunction();
console.log(Student.exampleValue);
