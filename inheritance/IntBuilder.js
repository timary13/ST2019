let Builder = require('./Builder.js');

class IntBuilder extends Builder {

    constructor(value) {
        if (isNaN(parseInt(value))) {
            throw Error("ERROR: invalid enter value.");
        }
        super(value);
    }

    minus(args) {
        if (this.calculate) {
            this.value -= args.reduce((acum, item) => acum + item);
        } else {
            this.history.set("minus", Array.from(arguments));
        }
        return this;
    }

    multiply(mul) {
        if (this.calculate) {
            this.value *= mul;
        } else {
            this.history.set("multiply", mul);
        }
        return this;
    }

    divide(div) {
        if (this.calculate) {
            this.value /= div;
        } else {
            this.history.set("divide", div);
        }
        return this;
    }

    mod(div) {
        if (this.calculate) {
            this.value %= div;
        } else {
            this.history.set("mod", div);
        }
        return this;
    }

    static random(from, to) {
        let rand = from + Math.random() * (to + 1 - from);
        return Math.floor(rand);
    }
}

module.exports = IntBuilder;
