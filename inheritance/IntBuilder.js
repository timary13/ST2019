const Builder = require('./Builder.js');

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
            this.setItemMap("minus", Array.from(arguments));
        }
        return this;
    }

    multiply(mul) {
        if (this.calculate) {
            this.value *= mul;
        } else {
            this.setItemMap("multiply", parseInt(mul));
        }
        return this;
    }

    divide(div) {
        if (this.calculate) {
            this.value /= div;
        } else {
            this.setItemMap("divide", parseInt(div));
        }
        return this;
    }

    mod(div) {
        if (this.calculate) {
            this.value %= div;
        } else {
            this.setItemMap("mod", parseInt(div));
        }
        return this;
    }

    static random(from, to) {
        from = parseInt(from);
        to = parseInt(to);
        let rand = from + Math.random() * (to + 1 - from);
        return Math.floor(rand);
    }
}

module.exports = IntBuilder;
