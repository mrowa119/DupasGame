var imageSrc = "img/P.png"

function Hero(bgWidth, bgHeight){
    this.ready = false;
    this.image = new Image();
    this.x = 0;
    this.y = 0;
    this.speed = 256;
    this.bgWidth = bgWidth;
    this.bgHeight = bgHeight;

}

Hero.prototype.loadImage = function(){
    this.image.src = imageSrc;
    this.ready = true;
};

Hero.prototype.reset = function(){
    this.y = this.bgHeight - this.image.height;
    this.x = (this.bgWidth - this.image.width)/2;
};

Hero.prototype.moveX = function(modifier){
    this.x = this.x + modifier*this.speed;
    if(this.x<0){
        this.x=0;
    }
    if(this.x>(this.bgWidth-this.image.width)){
        this.x=this.bgWidth-this.image.width;
    }
};

Hero.prototype.moveRight = function(modifier) {
    this.moveX(modifier);
};

Hero.prototype.moveLeft = function(modifier) {
    this.moveX(-1*modifier);
};