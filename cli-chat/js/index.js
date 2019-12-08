const LineWatcher = require('./lineWatcher');

const chatUrl = 'ws://chat.shas.tel';
const dirname = '../logs';
const nicknameFile = 'nickname.txt';
const chatLogFile = 'chatLog.txt';
let rl = new LineWatcher(chatUrl, dirname, nicknameFile, chatLogFile);

