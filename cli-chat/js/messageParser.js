const colors = require('colors/safe');
const dateFormat = require('dateformat');
const colorTheme = require('../colorTheme');

class MessageParser {
    constructor() {
        colors.setTheme(colorTheme);
    }

    parse(msg) {
        this.msg = msg;
        this.setColors();
        return this.getMessage();
    }

    formatDate() {
        return dateFormat(this.msg.time, "mmm d, h:MM TT");
    }

    setColors() {
        this.result = `${colors.time(this.formatDate())}: ` +
            `${colors.from(this.msg.from)}> ` +
             `${colors.message(this.msg.message)}`;
    }

    getMessage() {
        return this.result;
    }
}

module.exports = MessageParser;

