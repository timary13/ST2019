const readline = require('readline');
const fileInstruments = require('./fileManager');
const FileManager = fileInstruments.FileManager;
const WebSocketClient = require('./websocketclient');
const Bot = require('./bot');
const MessageSender = require('./messageSender');

class App {
    constructor(chatUrl, dirname, nicknameFile, chatLogFile) {
        this.instance = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.url = chatUrl;
        this.dirname = dirname;
        this.nicknameFile = new FileManager(dirname, nicknameFile);
        this.chatLogFile = chatLogFile;

        this.getNickname();
        this.setEvents();
    }

    checkAnswer(answer) {
        if (!answer.trim()) {
            this.nickname = this.nicknameFile.read();
            if (!this.nickname) {
                console.error("Nickname not found!");
                return this.getNickname();
            }
        } else {
            this.nickname = answer;
            this.nicknameFile.write(this.nickname);
        }
        this.startChat();
    }

    getNickname() {
        this.instance.question('Nickname?\n', (answer) => {
            this.checkAnswer(answer);
        });
    }

    startChat() {
        console.log(`Hello, ${this.nickname}`);
        this.chat = new WebSocketClient(this.url, this.dirname, this.chatLogFile);
        this.bot = new Bot(this.chat);
        this.messageSender = new MessageSender(this.nickname, this.chat, this.bot);
    }

    setEvents() {
        this.instance.on('line', (message) => {
            readline.moveCursor(process.stdout, 0, -1);
            this.lineWatcher(message);
        });

        this.instance.on('close', () => {
            this.chat.close();
        });
    }

    lineWatcher(message) {
        if (message === 'exit') {
            this.instance.close();
        }
        this.messageSender.sender(message);
    }
}

module.exports = App;

