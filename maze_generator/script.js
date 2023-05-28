//creating variable for the game
let dog = {x:10, y:20};
let step ={x:0, y:0};
let speed = 100;
let blocks_array = [];
let main_block_coordinate =[];




//defining each brick
class Block{
    constructor(X, Y){
        this.position = {x:X, y:Y}
        this.element = document.createElement("div");
        this.element.style.gridRowStart = this.position.y;
        this.element.style.gridColumnStart = this.position.x;
        this.element.classList.add("block");
        game_box.appendChild(this.element);
    }
}

for (let i=1; i<=30; i++){
    for(let j=1; j<=180; j++){
        blocks_array.push(new Block(i,j))
    }
}

  


// Get the grid container element
const gridContainer = document.querySelector('#game_box');

// Add click event listener to the grid container
let keyB = false;
let keyR = false;
document.addEventListener("keydown", (e)=>{
  console.log(e.key)
  if(e.key == "b"){
    return keyB = true;
  }
  if(e.key == "r"){
    return keyR = true;
  }
})
document.addEventListener("keyup", (e)=>{
  if(e.key == "b"){
    return keyB = false;
  }
  if(e.key == "r"){
    return keyR = false;
  }
})
gridContainer.addEventListener('mouseover', function(event) {
  if(keyB){
    const cell = event.target;
  const gridRow = getGridRow(cell);
  const gridColumn = getGridColumn(cell);
  cell.classList.toggle("main_block");
  console.log('Cell Position:', gridRow, gridColumn);
  }
  if(keyR){
    const cell = event.target;
  const gridRow = getGridRow(cell);
  const gridColumn = getGridColumn(cell);
  cell.classList.toggle("refrence_block");
  console.log('Cell Position:', gridRow, gridColumn);
  }

});

// Function to get the grid row of a cell
function getGridRow(cell) {
  const gridRow = parseInt(getComputedStyle(cell).gridRowStart);
  return gridRow;
}

// Function to get the grid column of a cell
function getGridColumn(cell) {
  const gridColumn = parseInt(getComputedStyle(cell).gridColumnStart);
  return gridColumn;
}


document.querySelector(".submit").addEventListener("click",()=>{
  main_block_coordinate.length =0;
  let list=Array.from(document.getElementsByClassName("main_block"));
  list.forEach((element)=>{
    let grid_row = getGridRow(element);
    let grid_column = getGridColumn(element);
    main_block_coordinate.push({grid_row: grid_row, grid_column: grid_column});
  })
  console.log(JSON.stringify(main_block_coordinate));
})







