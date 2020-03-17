const notifier = require('node-notifier');
const path = require('path');

exports.run = (from, message) => {
    notifier.notify(
        {
            title: from,
            message: message,
            icon: path.join(__dirname, '../assets/chat.png'),
            sound: true,
            wait: true
        }
    );
}

