let Leon = {
  name: "Leon",
  age: 38,
};

let book = {
  name: "Secret",
  age: 100,
};

function getAge(country, height) {
  console.log(this.name + "來自" + country + ", 身高是" + height + "cm");
  return this.age;
}

getAge.call(Leon, "台灣", 171);
getAge.call(book, "美國", 300);

const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const boundFunction = person.sayHello.bind(person);
boundFunction(); // 输出: Hello, John!

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const boundGreet = greet.bind(person, "Good morning");
boundGreet(); // 输出: Good morning, John!
