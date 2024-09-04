import LinkedList from './LinkedList.mjs';

export default class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    // PUSH
    push(data) {
        if (this.size < this.maxSize) {
            this.stack.addToHead(data);
            this.size++;
        } else {
            console.error("Stack is full, nothing added.");
            return null;
        }
    }

    // POP
    pop() {
        if (this.size) {
            const removed = this.stack.removeHead();
            this.size--;
            return removed;
        } else {
            console.error('Stack is empty, nothing to remove.');
            return null;
        }
    }

    // PEEK
    peek() {
        if (this.stack.head) {
            console.log(this.stack.head.data);
            return this.stack.head.data;
        } else {
            console.error('Stack is empty, nothing to see here.');
            return null;
        }
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    printStack() {
        this.stack.printList();
    }
}

const papirStabel = new Stack(3);

papirStabel.push("VG");
papirStabel.push("DB");
papirStabel.peek();
papirStabel.printStack();