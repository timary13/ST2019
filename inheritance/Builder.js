function Builder(value) {

    this.value = value;
    this.history = new Map();
    this.calculate = false;
};

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
    if (this.calculate) {
        this.value += args.reduce((acum, item) => acum + item);
    } else {
        this.setItemMap("plus", Array.from(arguments));
    }
    return this;
};

Builder.prototype.get = function () {
    this.calculate = true;
    for (var entry of this.history) {
        this[entry[0].name](entry[1]);
        this.history.delete(entry[0]);
    }
    this.calculate = false;
    return this.value;
};

module.exports = Builder;
