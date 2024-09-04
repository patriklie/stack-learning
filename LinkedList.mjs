import Node from './Node.mjs';

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const oldHead = this.head;
        this.head = new Node(data);

        if (!oldHead) {
            return;
        } else {
            this.head.nextNode = oldHead;
        }
    }

    addToTail(data) {
        const newTail = new Node(data);

        // If no head, new tail is the new head and tail of the list
        if (!this.head) {
            this.head = newTail;
        } else if (!this.head.nextNode) {
            this.head.nextNode = newTail;
        } else {

            let currentNode = this.head;

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newTail;
        }
    }

    removeHead() {
        if (!this.head) {
            console.log("List was empty, nothing removed.")
            return null;
        } 
        const removedHead = this.head;
        this.head = this.head.nextNode
        return removedHead.data; 
    }

    removeTail() {
        if (!this.head) {
            console.log("List was empty, nothing removed.")

            return null;

        } else if (!this.head.nextNode) {
            const removedTail = this.head;
            this.head = null;

            return removedTail.data;

        } else {

            let currentNode = this.head;

            while (currentNode.nextNode.nextNode) {
                currentNode = currentNode.nextNode;
            }

            const removedTail = currentNode.nextNode;
            currentNode.nextNode = null;
            return removedTail.data;
        }
    }

    printList() {
        if (!this.head) {
            console.log('List is empty.');
            return;
        } 

        let list = "START";
        let currentNode = this.head;

        while (currentNode) {
            list += ` -> ${currentNode.data}`;
            currentNode = currentNode.nextNode;
        }

        list += ` -> END`;

        console.log(list);
    }
}
/* 
const dager = new LinkedList;

const dagerArr = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

for (let i = 0; i < dagerArr.length; i++) {
    dager.addToTail(dagerArr[i]);
}

dager.printList();

dager.removeHead();
dager.printList();

dager.addToHead("Mandag");
dager.printList();

dager.removeTail();
dager.printList(); */