const fs = require('fs');
const path = require('path');

class FileManager {
    constructor(filename) {
        this.filename = path.join(__dirname, '../logs/', filename);
    }

    write(data) {
        fs.writeFile(this.filename, data, (err) => {
            if (err) console.log(err);
        });
    }

    read() {
        const name = fs.readFileSync(this.filename, 'utf8');
        return name;
    }

    appendFile(data) {
        fs.appendFile(this.filename, JSON.stringify(data), (err) => {
            if (err) console.log(err);
        });
    }
}

class FileLogger extends FileManager {
    constructor(filename) {
        super(filename);
        this.existFile();
    }

    lastUpdatedDate() {
        const {mtime} = fs.statSync(this.filename);
        return mtime;
    }

    existFile() {
        try {
            fs.accessSync(this.filename, fs.F_OK);
        } catch (e) {
            fs.closeSync(fs.openSync(this.filename, 'w'));
        }
    }

    appendDataAfterLastUpdate(msg) {
        if (msg.time > this.lastUpdatedDate()) {
            this.appendFile(msg);
        }
    }
}

module.exports = {
    FileLogger: FileLogger,
    FileManager: FileManager
};



