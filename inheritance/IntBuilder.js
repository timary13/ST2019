const Builder = require('./Builder.js');

class IntBuilder extends Builder {

    constructor(value) {
        if (isNaN(parseInt(value))) {
            throw Error("ERROR: invalid enter value.");
        }

        super(value);
    }

    minusCompute(args) {
        this.value -= args.reduce((acum, item) => acum + item);
    }

    multiplyCompute(mul) {
        this.value *= mul;
    }

    divideCompute(div) {
        this.value = Math.floor(this.value / div);
    }

    mod(div) {
        this.setItemMap("modCompute", parseInt(div));
        return this;
    }

    modCompute(div) {
        this.value %= div;
    }

    static random(from, to) {
        from = parseInt(from);
        to = parseInt(to);
        let rand = from + Math.random() * (to + 1 - from);
        return Math.floor(rand);
    }
}

module.exports = IntBuilder;
