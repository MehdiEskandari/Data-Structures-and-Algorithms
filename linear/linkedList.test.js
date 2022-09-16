const LinkedList = require('./linkedList');

describe("insertHead", ()=>{
    test("Insert a new node to the head", ()=> {
        const linkedList = new LinkedList()

        linkedList.insertHead(10)
        linkedList.insertHead(100)
        linkedList.insertHead(1000)

        expect(linkedList.length).toBe(3)
    })
})

describe("removeHead", ()=>{
    test("Remove a node from the linkedList", ()=> {
        const linkedList = new LinkedList()

        linkedList.insertHead(10)
        linkedList.insertHead(100)
        linkedList.insertHead(1000)
        linkedList.removeHead(1000)

        expect(linkedList.length).toBe(2)
    })
})

describe("indexAt", ()=>{
    test("Find a node from the linkedList", ()=> {
        const linkedList = new LinkedList()

        linkedList.insertHead(10)
        linkedList.insertHead(100)
        linkedList.insertHead(1000)

        expect(linkedList.indexAt(1).value).toBe(100)
    })
})

describe("insertAt", ()=>{
    test("Insert a new node to the head", ()=> {
        const linkedList = new LinkedList()

        linkedList.insertHead(1)
        linkedList.insertHead(10)
        linkedList.insertHead(100)
        linkedList.insertAt(1, 1000)
        
        expect(linkedList.indexAt(1).value).toBe(1000)
    })
})

describe("removeAt", ()=>{
    test("Remove a node from the linkedList", ()=> {
        const linkedList = new LinkedList()

        linkedList.insertHead(10)
        linkedList.insertHead(100)
        linkedList.insertHead(1000)
        linkedList.insertHead(10000)
        linkedList.removeAt(1)
        
        expect(linkedList.indexAt(2).value).toBe(10)
    })
})

describe("#clear", () => {
    test("Clear the arrayList", () => {
        const linkedList = new LinkedList()

        linkedList.insertHead(10)
        linkedList.insertHead(100)
        linkedList.insertHead(1000)
        linkedList.clear()

        expect(linkedList.length).toBe(0);
    });
});