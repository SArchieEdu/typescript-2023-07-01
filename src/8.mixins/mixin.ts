class Animal {
  feed() {}
}

class Movable {
  move() {}
}

class Horse {}
interface Horse extends Animal, Movable {}

type Class = new (...args: any[]) => {};

function applyMixins(baseClass: Class, parentClasses: Class[]) {
  parentClasses.forEach((parent) => {
    Object.getOwnPropertyNames(parent.prototype).forEach((name) => {
      baseClass.prototype[name] = parent.prototype[name];
    });
  });
}

applyMixins(Horse, [Movable, Animal]);

const horse = new Horse();
horse.move();
