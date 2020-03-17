const WebSocket = require('ws');
const notify = require('./notifier');
const fileInstruments = require('./fileManager');
const FileLogger = fileInstruments.FileLogger;
const MessageParser = require('./messageParser');


class WebSocketClient {
    constructor(url, dirname, chatLogFile) {
        this.RECONNECT_INTERVAL_MS = 5000;
        this.NOTIFY_INTERVAL_MS = 5000;
        this.url = url;
        this.open(this.url);
        this.logger = new FileLogger(dirname, chatLogFile);
        this.messageParser = new MessageParser();
    }

    open(url) {
        this.instance = new WebSocket(url);
        this.instance.on('open', () => {
            console.log("Connection: open");
        });
        this.instance.on('message', (data) => {
            const msg = JSON.parse(data);
            msg
                .sort((a, b) => a.time - b.time)
                .forEach(msg => {
                    this.logMessage(msg);
                });

        });
        this.instance.on('close', (code) => {
            switch (code) {
                case 1000:
                    console.log("Connection: closed");
                    process.exit(0);
                    break;
                default:
                    this.reconnect();
                    break;
            }
        });
        this.instance.on('error', (error) => {
            switch (error) {
                case 'ECONNREFUSED':
                    this.reconnect();
                    break;
                default:
                    console.log("Connection: error", error);
                    break;
            }
        });
    }

    logMessage(msg) {
        console.log(this.messageParser.parse(msg));
        this.logger.appendDataAfterLastUpdate(msg);

        if(Date.now() - msg.time <= this.NOTIFY_INTERVAL_MS) {
            notify.run(msg.from, msg.message);
        }
    }

    send(data) {
        try {
            this.instance.send(JSON.stringify(data));
        } catch (e) {
            this.instance.emit('error', e);
        }
    }

    close() {
        this.instance.close(1000);
    }

    reconnect() {
        this.instance.removeAllListeners();
        let that = this;
        setTimeout(function () {
            console.log("Connection: reconnecting...");
            that.open(that.url);
        }, this.RECONNECT_INTERVAL_MS);
    }
}

module.exports = WebSocketClient;


