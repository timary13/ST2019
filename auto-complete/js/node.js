let Node = function () {
    this.isWordEnd = false;
    this.repeat = 0;
    this.letters = new Map();
};
Node.prototype.setEnd = function () {
    this.isWordEnd = true;
};

module.exports = Node;
