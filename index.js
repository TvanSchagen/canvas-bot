// Require our node packages
const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');
const randomInt = require('random-int');

// Initialise telegram-bot
const canvasToken = '367658684:AAEG7HFK_raGDEkrIKNln5OrxDeulzUqGPs';
const canvasBot = new TelegramBot(canvasToken, {polling: true});

// Static file serving, /assets/
var serve = serveStatic("./");
var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});
server.listen(process.env.PORT || 80);



// Bot procedures
canvasBot.on('text', function(msg){

    // Willem
    if (msg.text.toLowerCase().includes("willem")) {
        canvasBot.sendMessage(msg.chat.id, "Hoorde ik onze koning?");

        if(randomInt(1,2) === 1){
            canvasBot.sendVoice(msg.chat.id, 'http://canvasstudiobot.herokuapp.com/assets/stillewillem.ogg');
        }else{
            canvasBot.sendVoice(msg.chat.id, 'http://canvasstudiobot.herokuapp.com/assets/specerijen.ogg');
        }
    }

    // Kokosnoot
    if (msg.text.toLowerCase().includes("kokosnoot") || msg.text.toLowerCase().includes("kokosnoten")) {
        canvasBot.sendMessage(msg.chat.id, "Kokosnoten zijn geen specerijen.");
        canvasBot.sendMessage(msg.chat.id, "`G E K O L O N I S E E R D`", {"parse_mode":"Markdown"});
    }
    
    // Ah, Nijs
    if (msg.text.toLowerCase().includes("nijs")) {
        canvasBot.sendSticker(msg.chat.id, './assets/nijs.webp');
    }

    // Dab
    if (msg.text.toLowerCase().includes("dab")) {
        canvasBot.sendSticker(msg.chat.id, './assets/dab.webp');
    }
    
    // Javascript
    if (msg.text.toLowerCase().includes("javascript")) {
        canvasBot.sendMessage(msg.chat.id, "Javascript? Je bedoelt ECMAScript.");
    }
    
    // PHP
    if (msg.text.toLowerCase().includes("php")) {
        canvasBot.sendMessage(msg.chat.id, "Brr, praat me niet van die rottaal. `php` ", {"parse_mode":"Markdown"});
    }
    
    // VUE
    if (msg.text.toLowerCase().includes("vue")) {
        canvasBot.sendMessage(msg.chat.id, "Vue? Volgensmij schrijf je Angular4 verkeerd.", {"parse_mode":"Markdown"});
    }

    // Tik
    if (msg.text.toLowerCase().includes("tik")) {
        canvasBot.sendSticker(msg.chat.id, './assets/tik.webp');
    }

});
