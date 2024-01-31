class Animal {
  // ...
  run() {
    console.log("Animal run!");
  }
}

class Rabbit extends Animal {
  // ...
  run() {
    super.run(); // Animal run!
    console.log("Rabbit jump!");
  }
}
let rabbit = new Rabbit();
rabbit.run();
