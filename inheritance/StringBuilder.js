const Builder = require('./Builder.js');

function StringBuilder(value) {

    if (!value) {
        value = '';
    }
    Builder.call(this, value);
};

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus = function (num) {
    if (this.calculate) {
        this.value = this.value.slice(0, -num);
    } else {
        this.setItemMap("minus", parseInt(num));
    }
    return this;
};

StringBuilder.prototype.multiply = function (count) {
    if (this.calculate) {
        this.value = this.value.repeat(count);
    } else {
        this.setItemMap("multiply", parseInt(count));
    }
    return this;
};

StringBuilder.prototype.divide = function (num) {
    if (this.calculate) {
        const divideResult = Math.floor(this.value.length / num);
        this.value = this.value.slice(0, divideResult);
    } else {
        this.setItemMap("divide", parseInt(num));
    }
    return this;
};

StringBuilder.prototype.remove = function (str) {
    if (this.calculate) {
        var pos = 0;
        while (str != '' && (pos = this.value.indexOf(str)) != -1) {
            this.value = this.value.substr(0, pos) + this.value.substr(pos + str.length);
        }
    } else {
        this.setItemMap("remove", str);
    }
    return this;
};

StringBuilder.prototype.sub = function (args) {
    if (this.calculate) {
        var from, n;
        [from, n] = [args[0], args[1]];
        this.value = this.value.substr(from, from + n - 1);
    } else {
        this.setItemMap("sub", Array.from(arguments));
    }
    return this;
};

module.exports = StringBuilder;
