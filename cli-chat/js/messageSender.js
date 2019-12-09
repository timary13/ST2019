class MessageSender {
    constructor(nickname, chat, bot) {
        this.nickname = nickname;
        this.chat = chat;
        this.bot = bot;
    }

    sender(message) {
        this.message = message;
        this.sendMessageFromClient();
        if (message.startsWith('/bot')) {
            this.sendMessageFromBot();
        }
    }

    sendMessageFromBot() {
        const botMessage = {};
        botMessage.message = this.bot.sendToBot(this.nickname, this.message);
        botMessage.from = 'Bot';
        this.chat.send(botMessage);
    }

    sendMessageFromClient() {
        const messageObject = {};
        messageObject.from = this.nickname;
        messageObject.message = this.message;
        this.chat.send(messageObject);
    }
}

module.exports = MessageSender;
