class Node {
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.body = null;
    this.size = 0;
  }

  isEmpty = () => this.size === 0;

  getSize = () => this.size;

  prepend = (value) => {
    const node = new Node(value, this.head)
    
    this.isEmpty() ? this.body = node : node.next = this.head;
    this.head = node
    
    this.size++;
  }
  append = (value) => {
    const node = new Node(value, null)
    
    this.isEmpty() ? this.head = node : this.body.next = node;
    this.body = node

    this.size++;
  }

  print = () => {
    if (this.isEmpty()) {
      console.log("List is empty")
    } else {
      let curr = this.head
      let listValues = ''
      while (curr) {
        listValues +=  `${curr.value} --> `
        curr = curr.next
      }
      console.log(listValues);
      console.log("this.body", this.body.value);
    }
  }
}

const linkedlist = new LinkedList();


linkedlist.prepend(1000)
linkedlist.prepend(10000)
linkedlist.prepend(100000)
linkedlist.append(100)
linkedlist.append(10)
linkedlist.append(1)
console.log("isEmpty: ", linkedlist.isEmpty());
console.log("size: ", linkedlist.getSize());

linkedlist.print()