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

class IntBuilder extends Builder {
    
    constructor(value) {
        if(isNaN(parseInt(value))) {
            throw Error("ERROR: invalid enter value.");
        }
        super(value);
    }

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

    static random(from, to) {
        let rand = from + Math.random() * (to + 1 - from);
        return Math.floor(rand);
    }
}

let StringBuilder = function (value) {
    if(!value) {
        value = '';
    }
    Builder.call(this, value);

    this.minus = function (num) {
        this.value = this.value.slice(0, -num);
        return this;
    }

    this.multiply = function (count) {
        this.value = this.value.repeat(count);
        return this;
    }

    this.divide = function (num) {
        let divideResult = Math.floor(this.value.length / num);
        this.value = this.value.slice(0, divideResult);
        return this;
    }

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

let b = new IntBuilder(1);
let x = b.minus(2,3).minus(4).multiply(2).divide(2).mod(3).get();
console.log(x);

// let s = new StringBuilder();
// //let sx = s.plus('234 5').minus(1).multiply(2).remove('12').sub(1, 2).get();
// console.log(s.get());

//console.log(IntBuilder.random(131, 17));
