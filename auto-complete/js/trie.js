const Node = require('./node.js');

let Trie = function () {
    this.root = new Node();
};
Trie.prototype.add = function (word, repeat, node = this.root) {
    if (word.length == 0) {
        node.setEnd();
        if (repeat) {
            node.repeat++;
        }
        return;
    } else if (!node.letters.has(word[0])) {
        node.letters.set(word[0], new Node());
    }
    return this.add(word.substr(1), repeat, node.letters.get(word[0]));
};

Trie.prototype.getSubTree = function (word) {
    let node = this.root;
    while (word.length > 1) {
        if (!node.letters.has(word[0])) {
            return false;
        } else {
            node = node.letters.get(word[0]);
            word = word.substr(1);
        }
    }

    if (node.letters.has(word)) {
        return node.letters.get(word);
    }
};

Trie.prototype.find = function (str, subNode, words = []) {
    if (subNode.isWordEnd) {
        words.push(str);
        if (subNode.repeat) {
            for (let x = 0; x < subNode.repeat; x++)
                words.push(str);
        }
    }
    if (subNode.letters.size != 0) {
        for (let letter of subNode.letters.keys()) {
            this.find(str.concat(letter), subNode.letters.get(letter), words);
        }
    }
    return words;
};

Trie.prototype.search = function (str, node = this.root) {
    let word = [];
    if (node.letters.size != 0) {
        str = str[0].toLowerCase() + str.substr(1);
        let node = this.getSubTree(str);

        if (node) {
            word.push(...this.find(str, node));
        }
        str = str[0].toUpperCase() + str.substr(1);
        node = this.getSubTree(str);
        if (node) {
            word.push(...this.find(str, node));
        }
    }
    return word;
};


module.exports = Trie;
