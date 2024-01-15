let leon = {
  name: "Leon",
  sayHi() {
    console.log(this.name + "說你好");
  },
};

let phil = {
  __proto__: leon,
};

leon.sayHi();
phil.sayHi();

//  __proto__
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function (z) {
    console.log(this.name + ": say hello" + z);
  };
}

let roy = new Person("Roy", 38); // roy.__proto__ => Persn.protype
let kem = new Person("Kem", 37); // kathy.__proto__ => Persn.protype
console.log(roy.__proto__ == Person.prototype); //  製作的物件, obj.__proto__ 以及 A..prototype 都是同個reference data type

/**
 * 這樣好處,是可以讓roy以及Kem 去執行prototype裡面的method,這樣只會佔據 記憶體的一格而已
 */
Person.prototype.hello = function () {
  //在Person物件再建立一個function(不能使用箭頭函式)
  console.log(this.name + "說哈囉");
};

roy.hello(); //  roy proto的屬性有繼承Person.prototype的methods
kem.hello();

Person.prototype.type = "人類";
console.log(roy.type);
Person.prototype.gender = "男生";
console.log(roy.gender);
