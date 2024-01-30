try {
  hello();
  //   console.log("無錯誤");
} catch (err) {
  if (e instanceof ReferenceError) {
    // 可以使用instanceof 來判斷ErrorType
    console.log("發生ReferenceError");
  }
}

console.log("****************************************");

// instanceof operator
class Person {
  constructor(name) {
    this.name = name;
  }
}

let leon = new Person("Leon Liu");
console.log(leon instanceof Person);
