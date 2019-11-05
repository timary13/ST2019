let Builder = function (value) {

    this.value = value;

    this.plus = function (...args) {
        this.value += args.reduce((acum, item) => acum + item);
        return this;
    }

    this.get = function () {
        return this.value;
    }
}

module.exports = Builder;
