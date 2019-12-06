const readline = require('readline');
const Connection = require('./socket');
const file = require('./fileWorker');


let nickname = '';
let chat = null;
const messageObject = {};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function  checkNickname () {
    rl.question('Nickname?\n', (answer) => {
        if(!answer.trim()) {
            nickname = file.readFromFile();
            if(!nickname) {
                console.error("Nickname not found!");
                return checkNickname();
            }
        }
        else {
            nickname = answer;
            file.writeInFileNickname(nickname);
        }
        console.log(`Hello, ${nickname}`);
        messageObject.from = nickname
        chat = new Connection('ws://chat.shas.tel');
    });
}

checkNickname();

rl.on('line', (message) => {
    if(message === 'exit') {
        rl.close();
    }
    messageObject.message = message;
    chat.send(messageObject);

});

rl.on('close', () => {
    chat.close();
});



