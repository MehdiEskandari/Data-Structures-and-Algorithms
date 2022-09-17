const Queue = require('./queue');

describe("#enqueue", () => {
    test("Add an item into the queue.", ()=> {
        const queue = new Queue();

        queue.enqueue(10)
        queue.enqueue(100)
        queue.enqueue(1000)

        expect(queue.length).toBe(3)
    })
})

describe("#dequeue", () => {
    test("Remove an item from the queue.", ()=> {
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
    test("Check if there is an item in the queue", ()=> {
        const queue = new Queue();

        queue.enqueue(10)
        queue.enqueue(100)
        queue.enqueue(1000)

        expect(queue.contains(100)).toBe(true)
        expect(queue.contains(1)).toBe(false)
    })
})