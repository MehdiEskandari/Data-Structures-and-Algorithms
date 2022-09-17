const Queue = require('./queue');

describe("#enqueue", () => {
    test("Push an item to the queue.", ()=> {
        const queue = new Queue();

        queue.enqueue(10)
        queue.enqueue(100)
        queue.enqueue(1000)

        expect(queue.length).toBe(3)
    })
})

describe("#dequeue", () => {
    test("Push an item to the queue.", ()=> {
        const queue = new Queue();

        queue.enqueue(10)
        queue.enqueue(100)
        queue.enqueue(1000)
        queue.dequeue()
        queue.dequeue()

        expect(queue.length).toBe(1)
    })
})

describe("#contains", () => {
    test("Push an item to the queue.", ()=> {
        const queue = new Queue();

        queue.enqueue(10)
        queue.enqueue(100)
        queue.enqueue(1000)

        expect(queue.length()).toBe(1)
    })
})