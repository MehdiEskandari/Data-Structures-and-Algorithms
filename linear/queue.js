class Queue {
  #list;
  constructor() {
    this.#list = [];
    this.length = 0;
  }

  enqueue(element) {
    this.#list.push(element);

    this.length++;
  }

  dequeue() {
    if (this.#isEmpty()) return null;

    this.#list.shift();

    this.length--;
  }

  contains(element) {
    let isFind = false;

    for (let i = 0; i < this.#list.length; i++)
      if (this.#list[i] === element) isFind = true;

    return isFind;
  }

  #isEmpty() {
    return this.#list.length === 0;
  }

  print() {
    let container = "";

    for (let i = 0; i < this.length; i++) {
      container += `${this.#list[i]} -> `;
    }

    return container;
  }
}

module.exports = Queue;
