class Stack {
    #list;
    #size;
    constructor(size) {
        this.length = 0;
        this.#size = size;
        this.#list = size ? new Array(size) : new Array();
    }

    push(element) {
        if (this.#checkArraySize() || !this.#size) {
            this.#list[this.length] = element
            this.length++;
        } else {
            throw new Error(`Stack is full => Stack size is ${this.#size}: Your data size is: ${this.length + 1}`)
        }
    }

    pop() {
        if (this.#isEmpty()) {
            return "Stack is empty.";
        } else {
            this.#list[this.length] = undefined;
            this.length--;
        }
    }

    peek() {
        if (this.#isEmpty())
            return "Stack is empty."
        else
            return this.#list[this.length - 1]
    }

    contains(element) {
        let isFind = false

        for (let index = 0; index < this.length; index++)
            if (this.#list[index] === element)
                isFind = true

        return isFind
    }

    #isEmpty() {
        return this.length === 0
    }

    #checkArraySize() {
        return this.length < this.#size
    }

    print() {
        let container = ""
        if (this.length === 0) {
            return "Stack is empty."
        } else {
            for (let index = 0; index < this.length; index++) {
                container += `${this.#list[index]} ${index === this.length - 1 ? '' : ' --> '}`
            }
        }
        return `${container} ${this.#size ? '=> Size: ' + this.length + '/' + this.#size : '=> Size: ' + this.length}`;
    };
}

module.exports = Stack;