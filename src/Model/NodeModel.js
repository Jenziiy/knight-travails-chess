class Node {
  constructor([x, y]) {
    this.id = [x, y];
    this.prev = null;
    this.neighborNodes = [];
    this.visited = false;
  }
}

export { Node };