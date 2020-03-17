const fs = require('fs');
const path = require('path');

class FileManager {
    constructor(dirname, filename) {
        this.dirname = path.join(__dirname, dirname);
        this.existDirectory(this.dirname);
        this.filename = path.join(this.dirname, filename);
        this.existFile();
    }

    existDirectory(dirname) {
        if (!fs.existsSync(dirname)){
            fs.mkdirSync(dirname);
        }
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

    existFile() {
        try {
            fs.accessSync(this.filename, fs.F_OK);
        } catch (e) {
            fs.closeSync(fs.openSync(this.filename, 'w'));
        }
    }
}

class FileLogger extends FileManager {
    constructor(dirname, filename) {
        super(dirname, filename);
    }

    lastUpdatedDate() {
        const {mtime} = fs.statSync(this.filename);
        return mtime;
    }

    appendFile(data) {
        fs.appendFile(this.filename, JSON.stringify(data), (err) => {
            if (err) console.log(err);
        });
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



