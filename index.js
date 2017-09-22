const TelegramBot = require('node-telegram-bot-api');

const canvasToken = '367658684:AAEG7HFK_raGDEkrIKNln5OrxDeulzUqGPs';
const canvasBot = new TelegramBot(canvasToken, {polling: true});
canvasBot.on('text', function(msg){

	console.log(msg);
    if (msg.text.toLowerCase().includes("willem")) {
        canvasBot.sendMessage(msg.chat.id, "Hoorde ik onze koning?");
		canvasBot.sendAudio(msg.hatId, './stillewillem.mp3');
    }

    if (msg.text.toLowerCase().includes("nijs")) {
        canvasBot.sendSticker(msg.chat.id, './nijs.webp');
    }

});

canvasBot.on('text', function(msg){

	console.log(msg);
    if (msg.text.toLowerCase().includes("willem")) {
        canvasBot.sendMessage(msg.chat.id, "Hoorde ik onze koning?");
		canvasBot.sendAudio(msg.hatId, 'http:///stillewillem.mp3');
    }

});

