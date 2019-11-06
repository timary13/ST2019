let Builder = function (value) {

    this.value = value;
    this.history = new Map();
    this.calculate = false;

    this.plus = function (args) {

        if (this.calculate) {
            this.value += args.reduce((acum, item) => acum + item);
        } else {
            this.history.set("plus", Array.from(arguments));
        }

        return this;
    }

    this.get = function () {
        this.calculate = true;
        console.log("history: ");
        for (let entry of this.history) {
            console.log(entry);
        }
        //cicle in map
        for (let entry of this.history) {
            this[entry[0]](entry[1]);
        }
        return this.value;
    }
}

module.exports = Builder;
