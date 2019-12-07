const lineWatcher = require('readline');
const fileInstruments = require('./fileManager');
const FileManager = fileInstruments.FileManager;
const Connection = require('./socket');

class LineWatcher {
    constructor(chatUrl, nicknameFile, chatLogFile) {
        this.nickname = '';
        this.instance = lineWatcher.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.chat = null;
        this.url = chatUrl;
        this.nicknameFile = new FileManager(nicknameFile);
        this.chatLogFile = chatLogFile;
        this.messageObject = {};

        this.checkNickname();
        this.setEvents();
    }

    checkNickname() {
        this.instance.question('Nickname?\n', (answer) => {
            if(!answer.trim()) {
                this.nickname = this.nicknameFile.read();
                if(!this.nickname) {
                    console.error("Nickname not found!");
                    return this.checkNickname();
                }
            }
            else {
                this.nickname = answer;
                this.nicknameFile.write(this.nickname);
            }
            console.log(`Hello, ${this.nickname}`);
            this.messageObject.from = this.nickname;
            this.chat = new Connection(this.url, this.chatLogFile);
        });
    }

    setEvents() {
        this.instance.on('line', (message) => {
            lineWatcher.moveCursor(process.stdout, 0, -1);

            if(message === 'exit') {
                this.instance.close();
            }
            this.messageObject.message = message;
            this.chat.send(this.messageObject);
        });

        this.instance.on('close', () => {
            this.chat.close();
        });
    }
}

module.exports = LineWatcher;

