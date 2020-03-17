require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

class Bot {
    constructor(client) {
        this.token = process.env.TOKEN;
        this.CHAT_ID = process.env.CHAT_ID;
        this.client = client;
        this.start();
    }

    start() {
        this.instance = new TelegramBot(this.token, {polling: true});
        this.instance.onText(/\/send (.+)/, (msg, match) => {
            const response = `i send message ${match[1]} to chat`;
            this.client.send({from: 'Bot', message: match[1]});
            this.instance.sendMessage(this.CHAT_ID, response);
        });
    }

    sendToBot(nickname, msg) {
        const reply = `i got message ${msg.slice(5)} from ${nickname}`;
        this.instance.sendMessage(this.CHAT_ID, reply);
        return reply;
    }
}

module.exports = Bot;
