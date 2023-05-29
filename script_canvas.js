const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = document.body.scrollWidth;
canvas.height = document.body.scrollHeight;
console.log(document.body.scrollHeight);
 
let particleArray = [];

class Particle{
    constructor(xCor, yCor, size, speedx, speedy, color){
        this.x = xCor;
        this.y = yCor;
        this.size = size;
        this.speedx = speedx;
        this.speedy = speedy;
        this.color = color;
    }
    update(){
        this.x += this.speedx;
        this.y += this.speedy;

        if ((this.x + this.speedx > canvas.width-this.size) ||
            (this.x + this.speedx < this.size)){
                this.speedx = -this.speedx;
            }
        if ((this.y + this.speedy > canvas.height-this.size) ||
            (this.y + this.speedy < this.size)){
                this.speedy = -this.speedy;
            } 
    }
    draw(){
        
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255, 0.5)";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
} 

const particle1 = new Particle(canvas.width*0.5, canvas.height*0.1, 10, -1, 1.5, "red");
const particle2 = new Particle(canvas.width*0.1, canvas.height*0.9, 20, -2, 1.5, "white");
const particle3 = new Particle(canvas.width*0.2, canvas.height*0.2, 15, 1, 2, "white");
const particle4 = new Particle(canvas.width*0.9, canvas.height*0.8, 35, 1, 2, "white");
const particle5 = new Particle(canvas.width*0.3, canvas.height*0.3, 20, 1, -2, "white");
const particle6 = new Particle(canvas.width*0.65, canvas.height*0.7, 40, 1, -2, "white");
const particle7 = new Particle(canvas.width*0.4, canvas.height*0.4, 25, -1, -2, "white");
const particle8 = new Particle(canvas.width*0.5, canvas.height*0.6, 50, -1, -2, "white");
const particle9 = new Particle(canvas.width*0.5, canvas.height*0.45, 30, -2, 1, "white");
const particle10 = new Particle(canvas.width*0.6, canvas.height*0.45, 60, -2, 1, "white");
const particle11 = new Particle(canvas.width*0.7, canvas.height*0.25, 35, 1, 2, "white");
const particle12 = new Particle(canvas.width*0.8, canvas.height*0.62, 70, 1, 2, "white");
const particle13 = new Particle(canvas.width*0.25, canvas.height*0.25, 40, -1, -1, "white");
const particle14 = new Particle(canvas.width*0.45, canvas.height*0.78, 80, -1, -1, "red");
particleArray.push(particle1);
particleArray.push(particle2);
particleArray.push(particle3);
particleArray.push(particle4);
particleArray.push(particle5);
particleArray.push(particle6);
particleArray.push(particle7);
particleArray.push(particle8);
particleArray.push(particle9);
particleArray.push(particle10);
particleArray.push(particle11);
particleArray.push(particle12);
particleArray.push(particle13);
particleArray.push(particle14);


function handel(){
    for (let i=0; i<(particleArray.length); i++){
            particleArray[i].draw();
            particleArray[i].update();
    }
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handel();
    requestAnimationFrame(animate);
}
animate();
