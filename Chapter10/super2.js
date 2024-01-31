// 職業的基礎父類別
class Profession {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attack(target) {
    console.log(`${this.name} attacks ${target.name}.`);
  }
}

// 戰士類別
class Warrior extends Profession {
  constructor(name, health, weapon) {
    // 使用 super() 呼叫父類別的建構子
    super(name, health);
    this.weapon = weapon;
  }

  // 覆寫父類別的 attack 方法
  attack(target) {
    console.log(`${this.name} swings ${this.weapon} at ${target.name}.`);
    // 使用 super.attack() 調用父類別的 attack 方法
    super.attack(target);
  }
}

// 弓箭手類別
class Archer extends Profession {
  constructor(name, health, bow) {
    super(name, health);
    this.bow = bow;
  }

  attack(target) {
    console.log(
      `${this.name} shoots an arrow from ${this.bow} at ${target.name}.`
    );
    super.attack(target);
  }
}

// 魔法師類別
class Mage extends Profession {
  constructor(name, health, spell) {
    super(name, health);
    this.spell = spell;
  }

  attack(target) {
    console.log(`${this.name} casts ${this.spell} on ${target.name}.`);
    super.attack(target);
  }
}

// 牧師類別
class Priest extends Profession {
  constructor(name, health) {
    super(name, health);
  }

  heal(target) {
    console.log(`${this.name} heals ${target.name}.`);
  }
}

// 使用範例
const warrior = new Warrior("Warrior", 100, "Sword");
const archer = new Archer("Archer", 80, "Bow");
const mage = new Mage("Mage", 70, "Fireball");
const priest = new Priest("Priest", 90);

warrior.attack(archer);
archer.attack(mage);
mage.attack(priest);
priest.heal(warrior);
