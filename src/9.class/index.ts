export abstract class Node {
  constructor(private x: number, public y: number, public children?: Node[]) {}

  abstract paint(): void;

  getCoordinate() {
    return { x: this.x, y: this.y };
  }
}

class FabricNode extends Node {
  paint(): void {}
}

class CarNode extends Node {
  paint(): void {}
}

class CircleNode extends Node {
  r: number = 0;
  paint(): void {}
}

const fabric = new FabricNode(0, 0);
const car = new CarNode(0, 0);
const circle = new CircleNode(0, 0, [fabric, car]);

function paintGraph(node: Node) {
  node.paint();

  if (node.children) {
    node.children.forEach((childNode) => childNode.paint());
  }
}

paintGraph(circle);
