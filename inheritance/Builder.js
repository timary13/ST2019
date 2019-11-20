function Builder(value) {
    this.value = value;
    this.history = new Map();
}

Builder.prototype.setItemMap = function (funName, args) {
    var keyCount = this.getCountItem(funName);
    const keyObj = {name: funName, id: ++keyCount};
    this.history.set(keyObj, args);
};

Builder.prototype.getCountItem = function (funName) {
    var count = 0;
    this.history.forEach((value, key) => {
        if (key.name == funName) {
            count++;
        }
    });

    return count;
};

Builder.prototype.plus = function (args) {
    this.setItemMap("plusCalculate", Array.from(arguments));
    return this;
};

Builder.prototype.plusCalculate = function (args) {
    this.value += args.reduce((acum, item) => acum + item);
};

Builder.prototype.minus = function (args) {
    this.setItemMap("minusCompute", Array.from(arguments));
    return this;
};

Builder.prototype.multiply = function (count) {
    this.setItemMap("multiplyCompute", parseInt(count));
    return this;
};

Builder.prototype.divide = function (count) {
    this.setItemMap("divideCompute", parseInt(count));
    return this;
};

Builder.prototype.get = function () {
    for (var entry of this.history) {
        this[entry[0].name](entry[1]);
        this.history.delete(entry[0]);
    }

    return this.value;
};

module.exports = Builder;
