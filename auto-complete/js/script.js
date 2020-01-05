const Trie = require('./trie.js');

module.exports = {

    createAutoComplete: function (data) {

        const tree = new Trie();
        data.forEach(item => {
            //repeat
            if (tree.getSubTree(item)) {
                tree.add(item, 1);
            } else {
                tree.add(item, 0);
            }
        });

        return function (str) {
            let result = [];
            if (str != undefined && str.trim() != '') {
                result.push(...tree.search(str));
            }
            return result;
        }
    }
};

