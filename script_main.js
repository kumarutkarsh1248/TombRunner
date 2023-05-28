//creating variable for the game
import {level_1_maze} from "./level_blocks/level1.js";
import {level_2_maze} from "./level_blocks/level2.js";
import {level_3_maze} from "./level_blocks/level3.js";
import {level_4_maze} from "./level_blocks/level4.js";
import {level_5_maze} from "./level_blocks/level5.js";
var hit = new Audio("music/hit.mp3");
var music = new Audio("music/main_song.mp3");
music.play();

let dog = {x:14, y:178};
let step ={x:0, y:0};
let speed = 100;
let blocks_array = [];

//main game loop
let go = window.setInterval(move, (1000/speed));

//initially creating the dog
let element = document.createElement("div");
        element.style.gridRowStart = dog.y;
        element.style.gridColumnStart = dog.x;
        element.classList.add("dog");
        game_box.appendChild(element);

//checking wether wall is present in its new position
function collision(){
    let collision;
    blocks_array.forEach(element=>{
        if((dog.x === element.position.x) && (dog.y === element.position.y)){
            return collision = true;
        }
    })
    if (collision){
        return true;
    }else{
        return false;
    }
}
function move(){
    //changing the parameters associated with dog
    dog.x += step.x;
    dog.y += step.y;
    //scrolling the page as the dog moves
    // if (dog.y > 20 && dog.y <160){
    //     window.scrollBy(0, (step.y)*(document.body.scrollHeight/200));
    // }
    
    //moving the dog only when there is no wall in front
    if (!collision()){
        //redrawing the dog
        document.getElementsByClassName("dog")[0].remove();
        let element = document.createElement("div");
        element.style.gridRowStart = dog.y;
        element.style.gridColumnStart = dog.x;
        element.classList.add("dog");
        game_box.appendChild(element);
    }else{
        dog.x -= step.x;
        dog.y -= step.y;
        step.x = 0;
        step.y = 0;
        hit.play();
        clearInterval(go);
    }
}
//listening to the keys
window.addEventListener("keydown", e=>{
    let cell = document.body.scrollHeight/200
    if(dog.y>=0 && dog.y<=36){
        window.scrollTo(0, cell*18);
    }
    if(dog.y>=36 && dog.y<=72){
        window.scrollTo(0, cell*54);
    }
    if(dog.y>=72 && dog.y<=108){
        window.scrollTo(0, cell*90);
    }
    if(dog.y>=108 && dog.y<=144){
        window.scrollTo(0, cell*120);
    }
    if(dog.y>=144 && dog.y<=180){
        window.scrollTo(0, cell*162);
    }
    switch (e.key) {
        case "ArrowUp":
            if (step.x == 0 && step.y==0){
                go = window.setInterval(move, (1000/speed));
            }
            step.x = 0;
            step.y = -1;
            break;
        case "ArrowDown":
            if (step.x == 0 && step.y==0){
                go = window.setInterval(move, (1000/speed));
            }
            step.x = 0;
            step.y = 1;
            break;
        case "ArrowLeft":
            if (step.x == 0 && step.y==0){
                go = window.setInterval(move, (1000/speed));
            }
            step.x = -1;
            step.y = 0;
            break;
        case "ArrowRight":
            if (step.x == 0 && step.y==0){
                go = window.setInterval(move, (1000/speed));
            }
            step.x = 1;
            step.y = 0;
            break;
        default:
            break;
    }
}); 
//defining each brick
class Block{
    constructor(X, Y, clas){
        this.position = {x:X, y:Y}
        this.element = document.createElement("div");
        this.element.style.gridRowStart = this.position.y;
        this.element.style.gridColumnStart = this.position.x;
        this.element.classList.add("block");
        this.element.classList.add(clas);
        game_box.appendChild(this.element);
    }
}
//recreating the wall
level_1_maze.forEach(element=>{
    let x_cor = element.grid_column;
    let y_cor = element.grid_row;
    blocks_array.push(new Block(x_cor, y_cor+(36*4), "block_level1"));
})
level_2_maze.forEach(element=>{
    let x_cor = element.grid_column;
    let y_cor = element.grid_row;
    blocks_array.push(new Block(x_cor, y_cor+(36*3), "block_level2"));
})
level_3_maze.forEach(element=>{
    let x_cor = element.grid_column;
    let y_cor = element.grid_row;
    blocks_array.push(new Block(x_cor, y_cor+(36*2), "block_level3"));
})
level_4_maze.forEach(element=>{
    let x_cor = element.grid_column;
    let y_cor = element.grid_row;
    blocks_array.push(new Block(x_cor, y_cor+(36*1), "block_level4"));
})
level_5_maze.forEach(element=>{
    let x_cor = element.grid_column;
    let y_cor = element.grid_row;
    blocks_array.push(new Block(x_cor, y_cor+(36*0), "block_level5"));
})

window.scrollTo(0, 3000);
window.addEventListener('keydown', (e) => {
    if (e.target.localName != 'input') {   // if you need to filter <input> elements
        switch (e.keyCode) {
            case 37: // left
            case 39: // right
                e.preventDefault();
                break;
            case 38: // up
            case 40: // down
                e.preventDefault();
                break;
            default:
                break;
        }
    }
}, {
    capture: true,   // this disables arrow key scrolling in modern Chrome
    passive: false   // this is optional, my code works without it
});
