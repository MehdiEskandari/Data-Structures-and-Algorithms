class Stack{
    #stack;
    constructor(){
        this.#stack = [];
    } 

    push = (element) => this.#stack.push(element)

    pop = () => this.#stack.pop()
    
    peek = () => this.#stack[this.#stack.length - 1]

    contains = (element) => this.#stack.includes(element)

    #isEmpty = () => this.#stack.length === 0

    size = () => this.#stack.length

    print = () => !this.#isEmpty ? this.#stack.join(" --> ") : "Stack is empty.";
}

module.exports = Stack;