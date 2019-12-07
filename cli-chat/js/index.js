const LineWatcher = require('./lineWatcher');

const chatUrl = 'ws://chat.shas.tel';
const nicknameFile = 'nickname.txt';
const chatLogFile = 'chatLog.txt';
let rl = new LineWatcher(chatUrl, nicknameFile, chatLogFile);

