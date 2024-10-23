# Data Structure Project / Self Learning

This project involves the implementation of simple data structures using JavaScript. The included data structures are Node, LinkedList, and Stack.

## Contents

- [Node](#node)
- [LinkedList](#linkedlist)
- [Stack](#stack)
- [How to Use](#how-to-use)
- [Examples](#examples)

## Node

The `Node` class represents a node in a simple linked list. It has the following properties and methods:

### Properties

- `data`: Contains the value stored in the node.
- `next`: Reference to the next node in the list.

## LinkedList

The `LinkedList` class represents a linked list of nodes.

### Properties

- `head`: Contains the value stored in the head node.

### Methods

- `addToHead`: Takes data as an argument and creates a new node placed at the front of the list.
- `addToTail`: Takes data as an argument and creates a new node placed at the end of the list.
- `removeHead`: Removes the first node in the list.
- `removeTail`: Removes the last node in the list.
- `printList`: Builds and logs a string with the nodes in the list, from start to end.

## Stack

The `Stack` class represents a FILO stack based on a linked list of nodes.

### Properties

- `stack`: Contains the newly created linked list.
- `maxSize`: Contains a numeric value for the maximum size of the stack; if nothing is provided, it defaults to Infinity.
- `size`: Contains the current size of the stack, starting at 0.

### Methods

- `push`: Takes data, creates a node, and adds it to the top of the stack.
- `pop`: Removes the top element from the stack.
- `peek`: Returns the data from the top node in the stack.
- `isEmpty`: Checks if the stack is empty, returning a boolean true/false.
- `hasRoom`: Checks if the stack is full, returning a boolean true/false.
- `printStack`: Prints a string with all the data from the stack from front to end.
