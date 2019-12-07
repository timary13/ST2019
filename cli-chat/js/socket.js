const WebSocket = require('ws');
const notify = require('./notifier');
const fileInstruments = require('./fileManager');
const FileLogger = fileInstruments.FileLogger;

class Connection {
    constructor(url, chatLogFile) {
        this.RECONNECT_INTERVAL_MS = 5000;
        this.NOTIFY_INTERVAL_MS = 1000;
        this.url = url;
        this.open(this.url);
        this.logger = new FileLogger(chatLogFile);
    }

    open(url) {
        this.instance = new WebSocket(url);
        this.instance.on('open', () => {
            console.log("Connection: open", arguments);
        });
        this.instance.on('message', (data) => {
            const msg = JSON.parse(data);
            msg
                .sort((a, b) => a.time - b.time)
                .forEach(msg => {
                    console.log(`${msg.from} : ${msg.message}`);
                    this.logMessage(msg);
                    if(Date.now() - msg.time <= this.NOTIFY_INTERVAL_MS) {
                        notify.run(msg.from, msg.message);
                    }
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

    logMessage(message) {
        this.logger.appendDataAfterLastUpdate(message);
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

module.exports = Connection;


