let Builder = function (value) {

    this.value = value;
    this.history = new Map();
    this.calculate = false;


    this.setItemMap = function (funName, args) {
        let keyCount = this.getCountItem(funName);
        let keyObj = {name: funName, id: ++keyCount};
        this.history.set(keyObj, args);
    };

    this.getCountItem = function (funName) {
        let count = 0;
        this.history.forEach((value, key) => {
            if (key.name == funName) {
                count++;
            }
        });
        return count;
    };

    this.plus = function (args) {
        if (this.calculate) {
            this.value += args.reduce((acum, item) => acum + item);
        } else {
            this.setItemMap("plus", Array.from(arguments));
        }
        return this;
    };

    this.get = function () {
        this.calculate = true;
        for (let entry of this.history) {
            this[entry[0].name](entry[1]);
            this.history.delete(entry[0]);
        }
        this.calculate = false;
        return this.value;
    }
}

module.exports = Builder;
