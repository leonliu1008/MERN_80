try {
  //   hello();
  console.log(a);
  //   console.log("無錯誤");
} catch (err) {
  if (err instanceof ReferenceError) {
    // 可以使用instanceof 來判斷ErrorType
    console.log("發生ReferenceError");
  } else if (err instanceof TypeError) {
    console.log("發生TypeError");
  } else {
    console.log("發生其他error");
  }
} finally {
  console.log("不管有無錯誤都會執行");
}

console.log("****************************************");

/**
 * 客製化錯誤訊息
 */
// throw丟
class NotArrayError extends TypeError {
  constructor(message) {
    super(message);
  }
  printSolution() {
    return "將Type改成Array 再執行";
  }
}
function sumArray(arr) {
  if (!Array.isArray(arr)) {
    // throw "參數並非array!!";
    // throw new TypeError("參數並非array!!");
    throw new NotArrayError("參數並非array");
  }
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
}

try {
  sumArray("hello"); //故意放非array type
} catch (e) {
  console.log(e);
  console.log(e.printSolution());
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
