class Stack{
    #stack;
    constructor(){
        this.#stack = [];
    } 

    push = (element) => this.#stack.push(element)

    pop = () => this.#stack.pop()
    
    peak = () => this.#stack[this.#stack.length - 1]

    contains = (element) => this.#stack.includes(element)

    isEmpty = () => this.#stack.length === 0

    size = () => this.#stack.length

    print = () => this.#stack.join(" --> ");
}

module.exports = Stack;