let Builder = require('./Builder.js');

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

module.exports = IntBuilder;
