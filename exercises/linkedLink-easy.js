class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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

  // O(1)
  prepend = (element) => {
    const node = new Node(element, this.head)
    
    this.isEmpty() ? this.body = node : node.next = this.head;
    this.head = node

    this.size++;
  }

  // O(1)
  append = (element) => {
    const node = new Node(element, null)
    
    this.isEmpty() ? this.head = node : this.body.next = node;
    this.body = node

    this.size++;
  }

  // O(n)
  insertAt = (index, element) => {
    let current = this.head
    
    index === 0 && this.prepend(element)
    if (index > 0) {
      for(let i = 0; i < index-1; i++) current = current.next;
      current.next = new Node(element, current.next)
    }

    this.size++;
  }

  print = () => {
    if (this.isEmpty()) {
      console.log("List is empty")
    } else {
      let curr = this.head
      let listValues = ''
      while (curr) {
        listValues +=  `${curr.value} --> ${!curr.next ? 'null' : ''}`
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
linkedlist.insertAt(3, 90)
console.log("isEmpty: ", linkedlist.isEmpty());
console.log("size: ", linkedlist.getSize());

linkedlist.print()