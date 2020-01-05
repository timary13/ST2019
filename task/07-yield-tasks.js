'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield        *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns the lines sequence of "99 Bottles of Beer" song:
 *
 *  '99 bottles of beer on the wall, 99 bottles of beer.'
 *  'Take one down and pass it around, 98 bottles of beer on the wall.'
 *  '98 bottles of beer on the wall, 98 bottles of beer.'
 *  'Take one down and pass it around, 97 bottles of beer on the wall.'
 *  ...
 *  '1 bottle of beer on the wall, 1 bottle of beer.'
 *  'Take one down and pass it around, no more bottles of beer on the wall.'
 *  'No more bottles of beer on the wall, no more bottles of beer.'
 *  'Go to the store and buy some more, 99 bottles of beer on the wall.'
 *
 * See the full text at
 * http://99-bottles-of-beer.net/lyrics.html
 *
 * NOTE: Please try to complete this task faster then original song finished:
 * https://www.youtube.com/watch?v=Z7bmyjxJuVY   :)
 *
 *
 * @return {Iterable.<string>}
 *
 */
function* get99BottlesOfBeer() {
    yield '99 bottles of beer on the wall, 99 bottles of beer.';
    yield 'Take one down and pass it around, 98 bottles of beer on the wall.';
    yield '98 bottles of beer on the wall, 98 bottles of beer.';
    yield 'Take one down and pass it around, 97 bottles of beer on the wall.';
    yield '97 bottles of beer on the wall, 97 bottles of beer.';
    yield 'Take one down and pass it around, 96 bottles of beer on the wall.';
    yield '96 bottles of beer on the wall, 96 bottles of beer.';
    yield 'Take one down and pass it around, 95 bottles of beer on the wall.';
    yield '95 bottles of beer on the wall, 95 bottles of beer.';
    yield 'Take one down and pass it around, 94 bottles of beer on the wall.';
    yield '94 bottles of beer on the wall, 94 bottles of beer.';
    yield 'Take one down and pass it around, 93 bottles of beer on the wall.';
    yield '93 bottles of beer on the wall, 93 bottles of beer.';
    yield 'Take one down and pass it around, 92 bottles of beer on the wall.';
    yield '92 bottles of beer on the wall, 92 bottles of beer.';
    yield 'Take one down and pass it around, 91 bottles of beer on the wall.';
    yield '91 bottles of beer on the wall, 91 bottles of beer.';
    yield 'Take one down and pass it around, 90 bottles of beer on the wall.';
    yield '90 bottles of beer on the wall, 90 bottles of beer.';
    yield 'Take one down and pass it around, 89 bottles of beer on the wall.';
    yield '89 bottles of beer on the wall, 89 bottles of beer.';
    yield 'Take one down and pass it around, 88 bottles of beer on the wall.';
    yield '88 bottles of beer on the wall, 88 bottles of beer.';
    yield 'Take one down and pass it around, 87 bottles of beer on the wall.';
    yield '87 bottles of beer on the wall, 87 bottles of beer.';
    yield 'Take one down and pass it around, 86 bottles of beer on the wall.';
    yield '86 bottles of beer on the wall, 86 bottles of beer.';
    yield 'Take one down and pass it around, 85 bottles of beer on the wall.';
    yield '85 bottles of beer on the wall, 85 bottles of beer.';
    yield 'Take one down and pass it around, 84 bottles of beer on the wall.';
    yield '84 bottles of beer on the wall, 84 bottles of beer.';
    yield 'Take one down and pass it around, 83 bottles of beer on the wall.';
    yield '83 bottles of beer on the wall, 83 bottles of beer.';
    yield 'Take one down and pass it around, 82 bottles of beer on the wall.';
    yield '82 bottles of beer on the wall, 82 bottles of beer.';
    yield 'Take one down and pass it around, 81 bottles of beer on the wall.';
    yield '81 bottles of beer on the wall, 81 bottles of beer.';
    yield 'Take one down and pass it around, 80 bottles of beer on the wall.';
    yield '80 bottles of beer on the wall, 80 bottles of beer.';
    yield 'Take one down and pass it around, 79 bottles of beer on the wall.';
    yield '79 bottles of beer on the wall, 79 bottles of beer.';
    yield 'Take one down and pass it around, 78 bottles of beer on the wall.';
    yield '78 bottles of beer on the wall, 78 bottles of beer.';
    yield 'Take one down and pass it around, 77 bottles of beer on the wall.';
    yield '77 bottles of beer on the wall, 77 bottles of beer.';
    yield 'Take one down and pass it around, 76 bottles of beer on the wall.';
    yield '76 bottles of beer on the wall, 76 bottles of beer.';
    yield 'Take one down and pass it around, 75 bottles of beer on the wall.';
    yield '75 bottles of beer on the wall, 75 bottles of beer.';
    yield 'Take one down and pass it around, 74 bottles of beer on the wall.';
    yield '74 bottles of beer on the wall, 74 bottles of beer.';
    yield 'Take one down and pass it around, 73 bottles of beer on the wall.';
    yield '73 bottles of beer on the wall, 73 bottles of beer.';
    yield 'Take one down and pass it around, 72 bottles of beer on the wall.';
    yield '72 bottles of beer on the wall, 72 bottles of beer.';
    yield 'Take one down and pass it around, 71 bottles of beer on the wall.';
    yield '71 bottles of beer on the wall, 71 bottles of beer.';
    yield 'Take one down and pass it around, 70 bottles of beer on the wall.';
    yield '70 bottles of beer on the wall, 70 bottles of beer.';
    yield 'Take one down and pass it around, 69 bottles of beer on the wall.';
    yield '69 bottles of beer on the wall, 69 bottles of beer.';
    yield 'Take one down and pass it around, 68 bottles of beer on the wall.';
    yield '68 bottles of beer on the wall, 68 bottles of beer.';
    yield 'Take one down and pass it around, 67 bottles of beer on the wall.';
    yield '67 bottles of beer on the wall, 67 bottles of beer.';
    yield 'Take one down and pass it around, 66 bottles of beer on the wall.';
    yield '66 bottles of beer on the wall, 66 bottles of beer.';
    yield 'Take one down and pass it around, 65 bottles of beer on the wall.';
    yield '65 bottles of beer on the wall, 65 bottles of beer.';
    yield 'Take one down and pass it around, 64 bottles of beer on the wall.';
    yield '64 bottles of beer on the wall, 64 bottles of beer.';
    yield 'Take one down and pass it around, 63 bottles of beer on the wall.';
    yield '63 bottles of beer on the wall, 63 bottles of beer.';
    yield 'Take one down and pass it around, 62 bottles of beer on the wall.';
    yield '62 bottles of beer on the wall, 62 bottles of beer.';
    yield 'Take one down and pass it around, 61 bottles of beer on the wall.';
    yield '61 bottles of beer on the wall, 61 bottles of beer.';
    yield 'Take one down and pass it around, 60 bottles of beer on the wall.';
    yield '60 bottles of beer on the wall, 60 bottles of beer.';
    yield 'Take one down and pass it around, 59 bottles of beer on the wall.';
    yield '59 bottles of beer on the wall, 59 bottles of beer.';
    yield 'Take one down and pass it around, 58 bottles of beer on the wall.';
    yield '58 bottles of beer on the wall, 58 bottles of beer.';
    yield 'Take one down and pass it around, 57 bottles of beer on the wall.';
    yield '57 bottles of beer on the wall, 57 bottles of beer.';
    yield 'Take one down and pass it around, 56 bottles of beer on the wall.';
    yield '56 bottles of beer on the wall, 56 bottles of beer.';
    yield 'Take one down and pass it around, 55 bottles of beer on the wall.';
    yield '55 bottles of beer on the wall, 55 bottles of beer.';
    yield 'Take one down and pass it around, 54 bottles of beer on the wall.';
    yield '54 bottles of beer on the wall, 54 bottles of beer.';
    yield 'Take one down and pass it around, 53 bottles of beer on the wall.';
    yield '53 bottles of beer on the wall, 53 bottles of beer.';
    yield 'Take one down and pass it around, 52 bottles of beer on the wall.';
    yield '52 bottles of beer on the wall, 52 bottles of beer.';
    yield 'Take one down and pass it around, 51 bottles of beer on the wall.';
    yield '51 bottles of beer on the wall, 51 bottles of beer.';
    yield 'Take one down and pass it around, 50 bottles of beer on the wall.';
    yield '50 bottles of beer on the wall, 50 bottles of beer.';
    yield 'Take one down and pass it around, 49 bottles of beer on the wall.';
    yield '49 bottles of beer on the wall, 49 bottles of beer.';
    yield 'Take one down and pass it around, 48 bottles of beer on the wall.';
    yield '48 bottles of beer on the wall, 48 bottles of beer.';
    yield 'Take one down and pass it around, 47 bottles of beer on the wall.';
    yield '47 bottles of beer on the wall, 47 bottles of beer.';
    yield 'Take one down and pass it around, 46 bottles of beer on the wall.';
    yield '46 bottles of beer on the wall, 46 bottles of beer.';
    yield 'Take one down and pass it around, 45 bottles of beer on the wall.';
    yield '45 bottles of beer on the wall, 45 bottles of beer.';
    yield 'Take one down and pass it around, 44 bottles of beer on the wall.';
    yield '44 bottles of beer on the wall, 44 bottles of beer.';
    yield 'Take one down and pass it around, 43 bottles of beer on the wall.';
    yield '43 bottles of beer on the wall, 43 bottles of beer.';
    yield 'Take one down and pass it around, 42 bottles of beer on the wall.';
    yield '42 bottles of beer on the wall, 42 bottles of beer.';
    yield 'Take one down and pass it around, 41 bottles of beer on the wall.';
    yield '41 bottles of beer on the wall, 41 bottles of beer.';
    yield 'Take one down and pass it around, 40 bottles of beer on the wall.';
    yield '40 bottles of beer on the wall, 40 bottles of beer.';
    yield 'Take one down and pass it around, 39 bottles of beer on the wall.';
    yield '39 bottles of beer on the wall, 39 bottles of beer.';
    yield 'Take one down and pass it around, 38 bottles of beer on the wall.';
    yield '38 bottles of beer on the wall, 38 bottles of beer.';
    yield 'Take one down and pass it around, 37 bottles of beer on the wall.';
    yield '37 bottles of beer on the wall, 37 bottles of beer.';
    yield 'Take one down and pass it around, 36 bottles of beer on the wall.';
    yield '36 bottles of beer on the wall, 36 bottles of beer.';
    yield 'Take one down and pass it around, 35 bottles of beer on the wall.';
    yield '35 bottles of beer on the wall, 35 bottles of beer.';
    yield 'Take one down and pass it around, 34 bottles of beer on the wall.';
    yield '34 bottles of beer on the wall, 34 bottles of beer.';
    yield 'Take one down and pass it around, 33 bottles of beer on the wall.';
    yield '33 bottles of beer on the wall, 33 bottles of beer.';
    yield 'Take one down and pass it around, 32 bottles of beer on the wall.';
    yield '32 bottles of beer on the wall, 32 bottles of beer.';
    yield 'Take one down and pass it around, 31 bottles of beer on the wall.';
    yield '31 bottles of beer on the wall, 31 bottles of beer.';
    yield 'Take one down and pass it around, 30 bottles of beer on the wall.';
    yield '30 bottles of beer on the wall, 30 bottles of beer.';
    yield 'Take one down and pass it around, 29 bottles of beer on the wall.';
    yield '29 bottles of beer on the wall, 29 bottles of beer.';
    yield 'Take one down and pass it around, 28 bottles of beer on the wall.';
    yield '28 bottles of beer on the wall, 28 bottles of beer.';
    yield 'Take one down and pass it around, 27 bottles of beer on the wall.';
    yield '27 bottles of beer on the wall, 27 bottles of beer.';
    yield 'Take one down and pass it around, 26 bottles of beer on the wall.';
    yield '26 bottles of beer on the wall, 26 bottles of beer.';
    yield 'Take one down and pass it around, 25 bottles of beer on the wall.';
    yield '25 bottles of beer on the wall, 25 bottles of beer.';
    yield 'Take one down and pass it around, 24 bottles of beer on the wall.';
    yield '24 bottles of beer on the wall, 24 bottles of beer.';
    yield 'Take one down and pass it around, 23 bottles of beer on the wall.';
    yield '23 bottles of beer on the wall, 23 bottles of beer.';
    yield 'Take one down and pass it around, 22 bottles of beer on the wall.';
    yield '22 bottles of beer on the wall, 22 bottles of beer.';
    yield 'Take one down and pass it around, 21 bottles of beer on the wall.';
    yield '21 bottles of beer on the wall, 21 bottles of beer.';
    yield 'Take one down and pass it around, 20 bottles of beer on the wall.';
    yield '20 bottles of beer on the wall, 20 bottles of beer.';
    yield 'Take one down and pass it around, 19 bottles of beer on the wall.';
    yield '19 bottles of beer on the wall, 19 bottles of beer.';
    yield 'Take one down and pass it around, 18 bottles of beer on the wall.';
    yield '18 bottles of beer on the wall, 18 bottles of beer.';
    yield 'Take one down and pass it around, 17 bottles of beer on the wall.';
    yield '17 bottles of beer on the wall, 17 bottles of beer.';
    yield 'Take one down and pass it around, 16 bottles of beer on the wall.';
    yield '16 bottles of beer on the wall, 16 bottles of beer.';
    yield 'Take one down and pass it around, 15 bottles of beer on the wall.';
    yield '15 bottles of beer on the wall, 15 bottles of beer.';
    yield 'Take one down and pass it around, 14 bottles of beer on the wall.';
    yield '14 bottles of beer on the wall, 14 bottles of beer.';
    yield 'Take one down and pass it around, 13 bottles of beer on the wall.';
    yield '13 bottles of beer on the wall, 13 bottles of beer.';
    yield 'Take one down and pass it around, 12 bottles of beer on the wall.';
    yield '12 bottles of beer on the wall, 12 bottles of beer.';
    yield 'Take one down and pass it around, 11 bottles of beer on the wall.';
    yield '11 bottles of beer on the wall, 11 bottles of beer.';
    yield 'Take one down and pass it around, 10 bottles of beer on the wall.';
    yield '10 bottles of beer on the wall, 10 bottles of beer.';
    yield 'Take one down and pass it around, 9 bottles of beer on the wall.';
    yield '9 bottles of beer on the wall, 9 bottles of beer.';
    yield 'Take one down and pass it around, 8 bottles of beer on the wall.';
    yield '8 bottles of beer on the wall, 8 bottles of beer.';
    yield 'Take one down and pass it around, 7 bottles of beer on the wall.';
    yield '7 bottles of beer on the wall, 7 bottles of beer.';
    yield 'Take one down and pass it around, 6 bottles of beer on the wall.';
    yield '6 bottles of beer on the wall, 6 bottles of beer.';
    yield 'Take one down and pass it around, 5 bottles of beer on the wall.';
    yield '5 bottles of beer on the wall, 5 bottles of beer.';
    yield 'Take one down and pass it around, 4 bottles of beer on the wall.';
    yield '4 bottles of beer on the wall, 4 bottles of beer.';
    yield 'Take one down and pass it around, 3 bottles of beer on the wall.';
    yield '3 bottles of beer on the wall, 3 bottles of beer.';
    yield 'Take one down and pass it around, 2 bottles of beer on the wall.';
    yield '2 bottles of beer on the wall, 2 bottles of beer.';
    yield 'Take one down and pass it around, 1 bottle of beer on the wall.';
    yield '1 bottle of beer on the wall, 1 bottle of beer.';
    yield 'Take one down and pass it around, no more bottles of beer on the wall.';
    yield 'No more bottles of beer on the wall, no more bottles of beer.';
    yield 'Go to the store and buy some more, 99 bottles of beer on the wall.';
}


/**
 * Returns the Fibonacci sequence:
 *   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * See more at: https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @return {Iterable.<number>}
 *
 */
function* getFibonacciSequence() {
    let firstNumber = 0, secondNumber = 1;
    while (true) {
        let currentNumber = firstNumber;
        firstNumber = secondNumber;
        secondNumber = currentNumber + firstNumber;
        yield currentNumber;
    }
}


/**
 * Traverses a tree using the depth-first strategy
 * See details: https://en.wikipedia.org/wiki/Depth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in depth-first order
 * @example
 *
 *   var node1 = { n:1 }, node2 = { n:2 }, node3 = { n:3 }, node4 = { n:4 },
 *       node5 = { n:5 }, node6 = { n:6 }, node7 = { n:7 }, node8 = { n:8 };
 *   node1.children = [ node2, node6, node7 ];
 *   node2.children = [ node3, node4 ];
 *   node4.children = [ node5 ];
 *   node7.children = [ node8 ];
 *
 *     source tree (root = 1):
 *            1
 *          / | \
 *         2  6  7
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       3   4     8
 *           |
 *           5
 *
 *  depthTraversalTree(node1) => node1, node2, node3, node4, node5, node6, node7, node8
 *
 */
function* depthTraversalTree(root) {
    let rootArrays = [], lastChildren = '', i = 0;
    rootArrays.push(root);
    yield root;

    while (root) {
        if (root.children) {
            i = root.children.indexOf(lastChildren);
            root = root.children[i + 1];
            if (root) {
                lastChildren = '';
                rootArrays.push(root);
                yield root;
            } else {
                lastChildren = rootArrays.pop();
                root = rootArrays[rootArrays.length - 1] || null;
            }
        } else {
            lastChildren = rootArrays.pop();
            root = rootArrays[rootArrays.length - 1] || null;
        }
    }
}


/**
 * Traverses a tree using the breadth-first strategy
 * See details: https://en.wikipedia.org/wiki/Breadth-first_search
 *
 * Each node have child nodes in node.children array.
 * The leaf nodes do not have 'children' property.
 *
 * @params {object} root the tree root
 * @return {Iterable.<object>} the sequence of all tree nodes in breadth-first order
 * @example
 *     source tree (root = 1):
 *
 *            1
 *          / | \
 *         2  3  4
 *        / \     \            =>    { 1, 2, 3, 4, 5, 6, 7, 8 }
 *       5   6     7
 *           |
 *           8
 *
 */
function* breadthTraversalTree(root) {
    class Node {
        constructor(data = null, prev = null, next = null) {
            this.data = data;
            this.prev = prev;
            this.next = next;
        }
    }

    class List {
        constructor() {
            this.length = 0;
            this._head = null;
            this._tail = null;
        }

        append(data) {
            let node = new Node(data);

            if (this.length === 0) {
                this._head = node;
                this._tail = node;
            } else {
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;
            }
            this.length++;

            return this;
        }

        nodeAt(index) {
            let currentNode = this._head;
            let length = this.length;
            let count = 0;
            if (length === 0 || index < 0 || index > length) {
                throw new Error(message.failure);
            }
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode;
        }

        deleteAt(index) {
            if (this.length === 0) {
                return;
            }
            if (this.length === 1) {
                this._head.data = null;
                this._tail.data = null;
            } else if (index === 0) {
                this.nodeAt(1).prev = null;
                this._head = this.nodeAt(1);
            } else if (index === this.length - 1) {
                this.nodeAt(index - 1).next = null;
                this._tail = this.nodeAt(index - 1);
            } else {
                this.nodeAt(index - 1).next = this.nodeAt(index + 1);
                this.nodeAt(index + 1).prev = this.nodeAt(index - 1);
            }
            this.length--;
            return this;
        }
    }

    let list = new List();
    list.append(root);

    while (list.length) {
        let node = new Node();
        node.data = list._head.data;
        list.deleteAt(0);

        if (node.data.children) {
            node.data.children.forEach(index => list.append(index));
        }
        yield node.data;
    }
}


/**
 * Merges two yield-style sorted sequences into the one sorted sequence.
 * The result sequence consists of sorted items from source iterators.
 *
 * @params {Iterable.<number>} source1
 * @params {Iterable.<number>} source2
 * @return {Iterable.<number>} the merged sorted sequence
 *
 * @example
 *   [ 1, 3, 5, ... ], [2, 4, 6, ... ]  => [ 1, 2, 3, 4, 5, 6, ... ]
 *   [ 0 ], [ 2, 4, 6, ... ]  => [ 0, 2, 4, 6, ... ]
 *   [ 1, 3, 5, ... ], [ -1 ] => [ -1, 1, 3, 5, ...]
 */
function* mergeSortedSequences(source1, source2) {
    throw new Error('Not implemented');
}


module.exports = {
    get99BottlesOfBeer: get99BottlesOfBeer,
    getFibonacciSequence: getFibonacciSequence,
    depthTraversalTree: depthTraversalTree,
    breadthTraversalTree: breadthTraversalTree,
    mergeSortedSequences: mergeSortedSequences
};
