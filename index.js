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
            canvasBot.sendVoice(msg.chat.id, 'http://canvasstudio-telegrambot.herokuapp.com/assets/stillewillem.ogg');
        }else{
            canvasBot.sendVoice(msg.chat.id, 'http://canvasstudio-telegrambot.herokuapp.com/assets/specerijen.ogg');
        }
    }
	
    // Wilhelm
    if (msg.text.toLowerCase().includes("wilhelm")) {
        canvasBot.sendMessage(msg.chat.id, "`W I L H E L M U S`", {"parse_mode":"Markdown"});
        canvasBot.sendVoice(msg.chat.id, 'http://canvasstudio-telegrambot.herokuapp.com/assets/wilhelmus.ogg');
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

    // Het Houdt Niet Op Niet Vanzelf
    if (msg.text.toLowerCase().includes("het houdt niet op")) {
        canvasBot.sendMessage(msg.chat.id, "niet vanzelf");
    }
    
    // Javascript
    if (msg.text.toLowerCase().includes("javascript")) {
        canvasBot.sendMessage(msg.chat.id, "Javascript? Je bedoelt ECMAScript.");
    }
    
    // PHP
    if (msg.text.toLowerCase().includes("php")) {
        canvasBot.sendMessage(msg.chat.id, "Brr, praat me niet van die rottaal. `php` ", {"parse_mode":"Markdown"});
    }

    // Laravel
    if (msg.text.toLowerCase().includes("laravel")) {
        canvasBot.sendMessage(msg.chat.id, "Laravel, het nieuwe, hotte framework voor mensen die te incompetent zijn om JavaScript te leren!", {"parse_mode":"Markdown"});
    }

    // Schoten
    if (msg.text.toLowerCase().includes("schoten")) {
        canvasBot.sendMessage(msg.chat.id, "Op 10 juli 1584 werd Willem van Oranje met drie kogels om het leven gebracht door Balthasar Gerards. In de ogen van Gerards was Willem van Oranje een verrader omdat hij zich het lot aantrok van de protestanten die zich verzetten tegen de Spaanse overheersing van Nederland.");
    }

    // Trello
    if (msg.text.toLowerCase().includes("trello")) {
        canvasBot.sendMessage(msg.chat.id, "Trello? Wij gebruiken hier alleen het alomwetende Todoist! Schaamt u zich zeer diep!");
    }

    // VUE
    if (msg.text.toLowerCase().includes("vue")) {
        canvasBot.sendMessage(msg.chat.id, "Vue? Volgensmij schrijf je Angular4 verkeerd.", {"parse_mode":"Markdown"});
    }

    // Tik
    if (msg.text.toLowerCase().includes("tik")) {
        canvasBot.sendSticker(msg.chat.id, './assets/tik.webp');
    }

    // Canvas
    if (msg.text.toLowerCase().includes("canvas")) {
        canvasBot.sendMessage(msg.chat.id, 'Ja?');
    }
	    
    // Nicki
    if (msg.text.toLowerCase().includes("nicki")) {
        canvasBot.sendVoice(msg.chat.id, 'http://canvasstudio-telegrambot.herokuapp.com/assets/biem.mp3');
    }

    // Nicki
    if (msg.text.toLowerCase().includes("moe")) {
        canvasBot.sendMessage(msg.chat.id, "Ik word hier zo moe van hè");
    }


});
