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

    // Moe
    if (msg.text.toLowerCase().includes("moe")) {
        canvasBot.sendMessage(msg.chat.id, "Ik word hier zo moe van hè");
    }

    // Moe
    if (msg.text.toLowerCase().includes("dankjewel")) {
        canvasBot.sendMessage(msg.chat.id, "Alsjeblieft");
    }

    // Moe
    if (msg.text.toLowerCase().includes("graag gedaan")) {
        canvasBot.sendMessage(msg.chat.id, "Super de Boer!");
    }
	
    // GameMaker
    if (msg.text.toLowerCase().includes("gamemaker")) {
	var random = randomInt(1,4)
        if(random == 1) {
		canvasBot.sendMessage(msg.chat.id, "GameMaker is de epitoom der spelmaakprogramma's op de markt in dit huidige jaar, en ja, ik durf zelfs te zeggen, in de komende 100 jaar.");
	} else if (random == 2) {
		canvasBot.sendMessage(msg.chat.id, "GameMaker overkomt raciale barrières en gender. Het is een schande dat dit wonderprogramma nog nooit nobelprijs voor de vrede heeft gewonnen.");
	} else if (random == 3) {
		canvasBot.sendMessage(msg.chat.id, "Mijn opa game-makete zijn hele leven. Ik was 10 jaar toen mijn moeder tegen hem zei: 'als je ooit je kleinkinderen wilt zien afstuderen, moet je onmiddellijk stoppen.' Tranen rolde over zijn wangen toen hij doorkreeg wat er precies speelde. Hij stopte meteen. Drie jaar later stierf hij aan RSI. Het was heel verdrietig en sloopte mij. Mijn moeder zei tegen me: 'Ga nooit game-maken. Laat alsjeblieft je familie nooit mee maken wat opa ons heeft aangedaan.' Ik ging akkoord. Ik ben nu 28 en heb nog nooit GameMaker aangeraakt. Ik moet zeggen, ik voel wat spijt dat ik het nooit gedaan heb, want jouw bericht heeft mij overtuigd.");
	} else if (random == 4) {
		canvasBot.sendMessage(msg.chat.id, "GameMaker is de god op deze aarde. ");
	}
    }
	
    if (msg.text.toLowerCase().includes("vuurwerk")) {
        canvasBot.sendMessage(msg.chat.id, "Wat de fuck zei je over mij, brutaaltje?? dat je het weet, ik kan het snelste twintig Cobra 6en door je brievenbus gooien van al mijn maten, ik heb meegewerkt aan kEIHARDE knallen, de vernietiging van meerdere prullenbakken en asociaal gedrag vertoond met mijn vuurwerk tegen meer dan duizend mensen. Jij bent slechts een flauw rotje voor mij. Ik ben getraind om alles helemaal naar de tyfus te knallen binnen een flits. Taskforce OVB heeft geen grip op mij. Let op mijn woorden, als je nog één keer die protestbek van je opentrekt dauw ik hoogstpersoonlijk tien lawinepijlen in je reet. Denk je dat je zo tegen mij kan praten omdat we op het internet zitten? Denk nog eens na, flauw flikkersterretje. Terwijl we praten heb ik mijn geheime netwerk van illegale handelaren en -vuurwerkafstekers ingezet en wordt je huis getraceerd dus bereid je maar vast voor op de tientallen vuurwerkbommen die door je brievenbus zullen worden gejast, brillenbeschermerdragertje. De vuurwerkbommen die je eens een lesje zullen leren, zielige Romeinse kaars die je bent! Je gaat er aan, cultuurbarbaar. Ik en mijn maten kunnen overal tegelijk zijn en op zevenhonderd verschillende manieren je laten schrikken door vuurwerk, en dat is alleen nog maar om jou zielige anti-vuurwerkreet bang te maken. Ik ben niet alleen in staat om je zielige huisje te bombarden met dikke fireworks maar ik heb de beschikking over de gehele illegale vuurwerkcollectie uit het Oostblok en ik zal er voor zorgen dat jij de komende honderd jaar tijdens Oud&Nieuw steevast binnen blijft. Als je zou weten wat voor domme gevolgen je 'slimme' comment over dat ‘vuurwerk verboden zou moeten worden' over je af heeft geroepen, had je misschien die brutale bek gehouden. Maar dat deed je niet, en nu betaal je de uiterste prijs, gedoofd lontje dat je bent. PYROMANIACS WILL NEVER DIE!!!");
    }	

});
