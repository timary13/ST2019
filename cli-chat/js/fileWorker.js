const fs = require('fs');
const path = require('path');
const nicknameFile = path.join(__dirname, '../logs/nickname.txt');
const chatLogFile = path.join(__dirname, '../logs/chatLog.txt');

function  writeInFile(filename, data) {
     fs.writeFile(filename, data, (err) => {
        if (err) console.log(err);
        //console.log("Successfully Written to File.");
    });

};

function  appendFile(filename, data) {
    fs.appendFile(filename, data, (err) => {
        if (err) console.log(err);
        //console.log("Successfully Written to File.");
    });

};

exports.writeInFileNickname = (data) => {
    writeInFile(nicknameFile, data);
};

exports.writeInFileChatLog = (msg) => {
    msg
        .sort((a, b) => a.time - b.time)
        .forEach(e => appendFile(chatLogFile, JSON.stringify(e)));
};

// readNickname = (data) => {
//     return data;
// };

exports.readFromFile = () => {
    const name = fs.readFileSync(nicknameFile,'utf8');
    return name;
};



