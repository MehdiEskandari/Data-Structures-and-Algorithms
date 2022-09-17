class Queue{
    #items;
    constructor(){
        this.#items = [];
    }

    enqueue = (element) => this.#items.push(element)
    
    dequeue = () => this.#items.shift()
    
    contains = (element) => this.#items.includes(element)

    #isEmpty = () => this.#items.length === 0
    
    peek = () => !this.#isEmpty() ? this.#items[0] : null
    
    size = () => this.#items.length
    
    print = () => !this.#isEmpty() ? this.#items.join(" --> ") : 'Queue is empty.'
}

module.exports = Queue;