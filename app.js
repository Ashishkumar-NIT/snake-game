const board = document.querySelector('.board');
const blockWidth = 50;
const blockHeight = 50;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

let intervalID = null;
let food = {x:Math.floor(Math.random() * rows),y:Math.floor(Math.random() * cols)}

const blocks = [];
const snake =[{x:Math.floor(Math.random() * 10 ),y:Math.floor(Math.random() * 10)}]
//  [
//     { 
//     x:1, y:3
//    
// let any = ["up","down","right","left"];
// let direction =any[Math.floor(Math.random() * 1 ) +3 ,Math.floor(Math.random() * 1) + 4];

let direction = "right";

for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
    const block = document.createElement('div'); //nested loop creates block
    block.classList.add('block'); 
    board.appendChild(block); //blocks are append in the board
    block.innerText = `${row}-${col}`; 
    // block.innerText = row+ '-' +col;
    blocks[`${row}-${col}`] = block;
    }
}

??*Z)QYBV)6Bn_g
function render(){

    let head = null;

    blocks[`${food.x}-${food.y}`].classList.add("food");
    
    if(direction === "left"){
        head = {x:snake[0].x,y:snake[0].y-1}
    }
    else if(direction === "right"){
        head = {x:snake[0].x,y:snake[0].y+1}
    }
    else if(direction === "up"){
        head = {x:snake[0].x-1,y:snake[0].y}
    }
    else if(direction === "down"){
        head = {x:snake[0].x+1,y:snake[0].y}
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >=cols){
        alert("Game Over");
        clearInterval(intervalID)
    }
    

    snake.forEach(segment =>{
         blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
    })
    
    snake.unshift(head)
    snake.pop()

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add('fill');
    })
}

intervalID = setInterval(()=>{
    render()
},200);


// ArrowDown
// app.js:67 ArrowUp
// app.js:67 ArrowLeft
// app.js:67 ArrowRight
addEventListener("keydown", (event)=>{
    if(event.key == "ArrowUp"){
        direction="up"
    }else if(event.key == "ArrowDown"){
        direction = "down"
    }else if(event.key == "ArrowLeft"){
        direction="left"
    }else if(event.key == "ArrowRight"){
        direction ="right"
    }
})