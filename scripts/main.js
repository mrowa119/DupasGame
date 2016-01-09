//Background image
var bgSrc = "img/Bg.png";
var bgWidth = 360;
var bgHeight = 480;
var buttonHeight = 50;

//Create CANVAS
var canvas = $('#canvas_id')[0];
var ctx = canvas.getContext("2d");
canvas.width = bgWidth;
canvas.height = bgHeight;

//Buttons
var buttons = new Buttons(bgWidth,buttonHeight);

//Background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = bgSrc;

//Hero
var hero = new Hero(bgWidth, bgHeight);
hero.loadImage();

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

//Update game object
var update = function (modifier) {
    if(37 in keysDown || buttons.getButtonPrefix() == -1){
        hero.moveLeft(modifier);
    }
    if(39 in keysDown || buttons.getButtonPrefix() == 1) {
        hero.moveRight(modifier);
    }
};

//Reset game
var reset = function () {
    hero.reset();

};

//Draw Function
var render = function () {
    if (bgReady){
        ctx.drawImage(bgImage,0,0);
    }
    if(hero.ready){
        ctx.drawImage(hero.image, hero.x, hero.y);
    }
};

var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//Start Game
var then = Date.now();
reset();
main();
