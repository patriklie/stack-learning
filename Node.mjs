export default class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    get nodeData() {
        return this.data
    }

    get nextNode() {
        return this.next;
    }

    set nextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            console.log('Argument not part of the Node class');
        }
    }
}