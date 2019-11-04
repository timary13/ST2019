let Builder = function (value) {

    this.value = value;

    this.plus = function(...args) {
        this.value += args.reduce((acum, item) => acum + item);
        return this;
    }
}

class IntBuilder extends Builder {
    minus(...args) {
        this.value -= args.reduce((acum, item) => acum + item);
        return this;
    }
    multiply(mul) {
        this.value *= mul;
        return this;
    }
    divide(div) {
        this.value /= div;
        return this;
    }
    mod(div) {
        this.value %= div;
        return this;
    }
    get() {
        return this.value;
    }
}

let StringBuilder = function(value) {
    Builder.call(this, value);
};

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

let b = new IntBuilder(1);
let x = b.minus(2,3).minus(4).multiply(2).divide(2).mod(3).get();
console.log(x);

// let s = new StringBuilder('1');
// let sx = s.plus('2');
// console.log(sx);
