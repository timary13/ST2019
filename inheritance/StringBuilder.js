const Builder = require('./Builder.js');

function StringBuilder(value) {

    if (!value) {
        value = '';
    }
    Builder.call(this, value);
};

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minusCompute = function (num) {
    this.value = this.value.slice(0, - (parseInt(num)));
};

StringBuilder.prototype.multiplyCompute = function (count) {
    this.value = this.value.repeat(count);
};

StringBuilder.prototype.divideCompute = function (num) {
    const divideResult = Math.floor(this.value.length / num);
    this.value = this.value.slice(0, divideResult);
};

StringBuilder.prototype.remove = function (str) {
    this.setItemMap("removeCompute", str);
    return this;
};

StringBuilder.prototype.removeCompute = function (str) {
    var pos = 0;
    while (str != '' && (pos = this.value.indexOf(str)) != -1) {
        this.value = this.value.substr(0, pos) + this.value.substr(pos + str.length);
    }
};

StringBuilder.prototype.sub = function (args) {
    this.setItemMap("subCompute", Array.from(arguments));
    return this;
};

StringBuilder.prototype.subCompute = function (args) {
    var from, n;
    [from, n] = [args[0], args[1]];
    this.value = this.value.substr(from, n);
};

module.exports = StringBuilder;
