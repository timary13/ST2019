const WebSocket = require('ws');
const notify = require('./notifier');

class Connection {
    constructor(url) {
        this.RECONNECT_INTERVAL = 5 * 1000;	// ms
        this.open(url);
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
                .forEach(e => {
                    console.log(`${e.from} : ${e.message}`);
                    if(e.time >= Date.now()) {
                        notify.run(e.from, e.message);
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
        }, this.RECONNECT_INTERVAL);
    }
}

module.exports = Connection;


