module.exports = {
    createAutoComplete: function (data) {

        let words = [];

        let Node = function () {
            this.isWordEnd = false;
            this.repeat = 0;
            this.letters = new Map();
            this.setEnd = function () {
                this.isWordEnd = true;
            }
        }

        let Trie = function () {
            this.root = new Node();

            this.add = function (word, repeat, node = this.root) {
                if (word.length == 0) {
                    node.setEnd();
                    if (repeat) {
                        node.repeat++;
                    }
                    return;
                } else if (!node.letters.has(word[0])) {
                    node.letters.set(word[0], new Node());
                    return this.add(word.substr(1), repeat, node.letters.get(word[0]));
                } else {
                    return this.add(word.substr(1), repeat, node.letters.get(word[0]));
                }
            };

            this.getSubTree = function (word) {
                let node = this.root;
                while (word.length > 1) {
                    if (!node.letters.has(word[0])) {
                        return false;
                    } else {
                        node = node.letters.get(word[0]);
                        word = word.substr(1);
                    }
                }

                if (node.letters.has(word))
                    return node.letters.get(word);
                else return null;
            }

            this.search = function (str, node = this.root) {
                if (node.letters.size != 0) {
                    let find = function (str, subNode) {
                        if (subNode.isWordEnd) {
                            words.push(str);
                            if (subNode.repeat) {
                                for (let x = 0; x < subNode.repeat; x++)
                                    words.push(str);
                            }
                        }
                        if (subNode.letters.size != 0) {
                            for (let letter of subNode.letters.keys()) {
                                find(str.concat(letter), subNode.letters.get(letter));
                            }
                        } else {
                            return;
                        }
                    }

                    str = str[0].toLowerCase() + str.substr(1);
                    let node = this.getSubTree(str);

                    if (node) {
                        find(str, node);
                    }
                    str = str[0].toUpperCase() + str.substr(1);
                    node = this.getSubTree(str);
                    if (node) {
                        find(str, node);
                    }
                }
            }

        }

        let tree;
        tree = new Trie();
        data.forEach(item => {
            //repeat
            if (tree.getSubTree(item)) {
                tree.add(item, 1);
            } else {
                tree.add(item, 0);
            }
        });

        return function (str) {
            words = [];
            if (str != undefined) {
                if (str.trim() != '') {
                    tree.search(str);
                }
            }
            return words;
        }
    }
}

