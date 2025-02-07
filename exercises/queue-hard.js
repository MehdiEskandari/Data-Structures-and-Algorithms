class Queue {
    #queue;
    constructor() {
        this.#queue = {}
        this.back = 0
        this.front = 0
    }

    enqueue(element) {
        this.#queue[this.back] = element
        this.back++
    }

    dequeue() {
        if(!this.#isEmpty()){
            const item = this.#queue[this.front]
            delete this.#queue[this.front]
            this.front++
            return item
        }
    }

    #isEmpty() {
        return this.back - this.front === 0
    }

    peek() {
        return this.#queue[this.front]
    }

    size() {
        return this.back - this.front
    }

    print() {
        return  !this.#isEmpty() ? this.#queue.join(' --> ') : 'Queue is empty.'
    }
}

module.exports = Queue;