class Node {
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty = () => this.size === 0;

  getSize = () => this.size;
}

const linkedlist = new LinkedList();

console.log("isEmpty: ", linkedlist.isEmpty());
console.log("size: ", linkedlist.getSize());
