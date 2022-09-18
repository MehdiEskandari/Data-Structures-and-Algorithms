class Node {
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(element) {
    const node = new Node(element, this.head);
    this.length++;
    this.head = node;
  }

  removeHead() {}

  indexAt() {}

  insertAt() {}

  removeAt() {}

  clear() {}

  #isEmpty() {
    return this.length === 0;
  }

extractData (node) {
    container = ""

    if(node.next){
        container
    }
}

  print() {
    let container = "";

    for (let index = 0; index < this.length; index++) {
      container += `${this.head.next} --> `;
    }

    return container
  }

  #checkIndexValidation() {}
}

const linkedlist = new LinkedList();

linkedlist.insertHead(10);
linkedlist.insertHead(100);
linkedlist.insertHead(1000);

console.log(linkedlist.print());
