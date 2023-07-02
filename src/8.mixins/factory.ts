export class Animal {
  feed() {}
}

class Horse extends Animal {}

type Class = new (...args: any[]) => {};

function createMovable<BaseClass extends Class>(Base: BaseClass) {
  return class Movable extends Base {
    move() {}
  };
}

const MovableHorse = createMovable<typeof Horse>(Horse);

const horse = new MovableHorse();
horse.move();
horse.feed();
