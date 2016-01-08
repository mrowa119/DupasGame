var canvas = CE.defines("canvas_id").
    ready(function() {
        canvas.Scene.call("MyScene");
    });
            
canvas.Scene.new({
    name: "MyScene",
    materials: {
        images: {
            img_id: "http://canvasengine.net/examples/img/html5.png"
        }
    },
    preload: function() {
    
    },
    ready: function(stage) {
        this.element = this.createElement();
        this.element.drawImage("img_id");
        stage.append(this.element);
    },
    render: function(stage) {
        this.element.x += 1;
        stage.refresh();
    },
    exit: function(stage) {
    
    }
});