const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');
const randomInt = require('random-int');

const canvasToken = '367658684:AAEG7HFK_raGDEkrIKNln5OrxDeulzUqGPs';
const canvasBot = new TelegramBot(canvasToken, {polling: true});

// Static file serving
var serve = serveStatic("./");
var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});
server.listen(8080);



// Bot
canvasBot.on('text', function(msg){

	console.log(msg);
    if (msg.text.toLowerCase().includes("willem")) {
        canvasBot.sendMessage(msg.chat.id, "Hoorde ik onze koning?");

        if(randomInt(1,2) === 1){
            canvasBot.sendAudio(msg.chat, 'https://canvasstudiobot.herokuapp.com/stillewillem.mp3');
        }else{
            canvasBot.sendAudio(msg.chat, 'https://canvasstudiobot.herokuapp.com/specerijen.mp3');
        }
    }

    if (msg.text.toLowerCase().includes("nijs")) {
        canvasBot.sendSticker(msg.chat.id, './nijs.webp');
    }

});
