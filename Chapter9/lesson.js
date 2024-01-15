let person = {
  name: "Leon",
  age: 38,
};

function sayHello() {
  console.log("hello!" + this.name);
}

sayHello.call(person);
console.log("-----------------");

function add(x, y) {
  return this.name + (x + y);
}
console.log(add.call(person, 50, 40));
console.log("--------------");

let counter = {
  count: 0,
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
};

let incrementByTwo = counter.increment.bind(counter);
let decrementByTwo = counter.decrement.bind(counter);

incrementByTwo();
console.log(counter.count); // 結果應該是 1

decrementByTwo();
console.log(counter.count); // 結果應該是 0
