/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let draw = false;

class Root {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 17 + 5;
        this.size = Math.random() * 1 + 4;
        this.vs = Math.random() * 0.8 + 0.2;
        this.angleX = Math.random() * 6.2;
        this.vaX = Math.random() * 0.6 - 0.3 ;
        this.angleY = Math.random() * 6.2;
        this.vaY = Math.random() * 0.6 - 0.3;
        this.angle = 0;
        this.va = Math.random() * 0.02 + 0.05;
        this.lightness = 30;

    }
    update(){
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.vs;
        this.angleX += this.vaX;
        this.angleY += this.vaY;
        this.angle += this.va;
        if (this.lightness < 70) this.lightness += 0.25;
        
        if (this.size < this.maxSize) {

            // save - restore = for animation
            ctx.save(); 
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.lineWidth = 0.2;
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
            ctx.fillStyle =  "#81bf7c";
            ctx.fillRect(0, 0, this.size, this.size);
            ctx.strokeStyle = "black";
            ctx.strokeRect(0, 0, this.size, this.size);
            requestAnimationFrame(this.update.bind(this));
            ctx.restore();
        }

    }
    
}



window.addEventListener("mousemove", function(e){
    if (draw) {
        for (let i = 0; i < 3; i++) {
            const root = new Root(e.x, e.y);
            root.update();
    } 
}

window.addEventListener("mousedown", (e) => {
    draw = true;
})

window.addEventListener("mouseup", () => {
    draw = false;
})


})