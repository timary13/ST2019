const Application = require('./app');

const chatUrl = 'ws://chat.shas.tel';
const dirname = '../logs';
const nicknameFile = 'nickname.txt';
const chatLogFile = 'chatLog.txt';
const app = new Application(chatUrl, dirname, nicknameFile, chatLogFile);

