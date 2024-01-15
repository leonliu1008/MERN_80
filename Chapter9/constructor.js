// let LeonLiu = {
//   name: "Leon",
//   sayHello() {
//     console.log(this.name + ": say hello");
//   },
// };

// LeonLiu.sayHello();

// let PhilYeh = {
//   name: "Phil",
//   sayHello() {
//     console.log(this.name + ": say hello");
//   },
// };

// let RollyLiu = {
//   name: "Rolly",
//   sayHello() {
//     console.log(this.name + ": say hello");
//   },
// };

//  constructor function
//  在JavaScript當中, constructor function 以大寫開頭
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function (z) {
    console.log(this.name + ": say hello" + z);
  };
}
let leon = new Person("Leon", 38);
let kathy = new Person("Kathy", 37);
let rolly = new Person("Rolly", 38);
let phil = new Person("Phil", 38);
leon.sayHello("!");

// reference data type  記憶體位置不同
console.log(leon.sayHello == rolly.sayHello);
