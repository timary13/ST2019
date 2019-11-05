let Builder = require('./Builder.js');

let StringBuilder = function (value) {

    if(!value) {
        value = '';
    }
    Builder.call(this, value);

    this.minus = function (num) {
        this.value = this.value.slice(0, -num);
        return this;
    };

    this.multiply = function (count) {
        this.value = this.value.repeat(count);
        return this;
    };

    this.divide = function (num) {
        let divideResult = Math.floor(this.value.length / num);
        this.value = this.value.slice(0, divideResult);
        return this;
    };

    this.remove = function (str) {
        let pos = 0;
        while ((pos = this.value.indexOf(str)) != -1) {
            this.value = this.value.substr(0, pos) + this.value.substr(pos + str.length);
        }
        return this;
    }

    this.sub = function (from, n) {
        this.value = this.value.substr(from, from + n);
        return this;
    }
};

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

module.exports = StringBuilder;
