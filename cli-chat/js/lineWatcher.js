const readline = require('readline');
const fileInstruments = require('./fileManager');
const FileManager = fileInstruments.FileManager;
const WebSocketClient = require('./websocketclient');
const Bot = require('./bot');

class LineWatcher {
    constructor(chatUrl, dirname, nicknameFile, chatLogFile) {
        this.instance = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.url = chatUrl;
        this.dirname = dirname;
        this.nicknameFile = new FileManager(dirname, nicknameFile);
        this.chatLogFile = chatLogFile;
        this.messageObject = {};

        this.getNickname();
        this.setEvents();
    }

    checkAnswer(answer) {
        if(!answer.trim()) {
            return this.readNicknameFromFile();
        }
        else {
            this.nickname = answer;
            this.nicknameFile.write(this.nickname);
        }
        this.startChat();
    }

    readNicknameFromFile() {
        this.nickname = this.nicknameFile.read();
        if(!this.nickname) {
            console.error("Nickname not found!");
            return this.getNickname();
        }
    }

    getNickname() {
        this.instance.question('Nickname?\n', (answer) => {
            this.checkAnswer(answer);
            // this.startChat();
        });
    }

    startChat() {
        console.log(`Hello, ${this.nickname}`);
        this.messageObject.from = this.nickname;
        this.chat = new WebSocketClient(this.url, this.dirname, this.chatLogFile);
        this.bot = new Bot(this.chat);
    }

    setEvents() {
        this.instance.on('line', (message) => {
            readline.moveCursor(process.stdout, 0, -1);
           this.messageSorter(message);
        });

        this.instance.on('close', () => {
            this.chat.close();
        });
    }

    messageSorter(message) {
        if(message === 'exit') {
            this.instance.close();
        }
        this.messageFromClient(message);
        if(message.startsWith('/bot')) {
            this.messageFromBot(message);
        }
    }

    messageFromBot(message) {
        const botMessage = {};
        botMessage.message = this.bot.sendToBot(this.nickname, message);
        botMessage.from = 'Bot';
        this.chat.send(botMessage);
    }

    messageFromClient(message) {
        this.messageObject.message = message;
        this.chat.send(this.messageObject);
    }
}

module.exports = LineWatcher;

