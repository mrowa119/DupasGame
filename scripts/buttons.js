function Buttons(bgWidth, buttonHeight) {
    this.buttonCanvas = $('#buttons')[0];
    this.buttonCtx = this.buttonCanvas.getContext("2d");
    this.buttonCanvas.width = bgWidth;
    this.buttonCanvas.height = buttonHeight;


    //TODO: HACK
    var keyPressedX = 0;
    var keyPressed = false;

//Buttons
    this.buttonCtx.beginPath();
    this.buttonCtx.rect(0,0,bgWidth/2,buttonHeight);
    this.buttonCtx.fillStyle = 'yellow';
    this.buttonCtx.fill();

    this.buttonCtx.beginPath();
    this.buttonCtx.rect(bgWidth/2,0,bgWidth/2,buttonHeight);
    this.buttonCtx.fillStyle = 'green';
    this.buttonCtx.fill();

    this.buttonCanvas.addEventListener("mousedown", function(e) {
        keyPressedX = e.clientX;
        keyPressed = true;
    });

    this.buttonCanvas.addEventListener("mouseup", function() {
        keyPressed = false;
    });

    //-1 = left; 1 = right, 0 = non key
    this.getButtonPrefix = function () {
        if(keyPressed){
            if(keyPressedX>bgWidth/2){
                return 1;
            } else {
                return -1;
            }
        } else {
            return 0;
        }
    }

}