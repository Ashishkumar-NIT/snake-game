// ACCESING ELEMENTS USING DOM EVENTS
const board = document.querySelector('.board');
const startButton = document.querySelector(".btn-start"); 
const restartButton = document.querySelector(".btn-restart");
const modal = document.querySelector(".modal");
const startgameModal = document.querySelector(".start-game");
const gameoverModal = document.querySelector(".game-over");


const highscoreElement = document.querySelector("#high-score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time")

// Setting the size of snake block
const blockWidth = 50;
const blockHeight = 50;

// Game Infos
let highscore = localStorage.getItem("highscore") || 0;
let score = 0;
let time = '00-00'
highscoreElement.innerText = highscore;

// Dynamically the blocks appear as per screen size
const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

// Random Snake food appearence
let intervalID = null;
let food = {x:Math.floor(Math.random() * rows),y:Math.floor(Math.random() * cols)}

// Random snake start position
const blocks = [];
let snake =[{x:Math.floor(Math.random() * 10 ),y:Math.floor(Math.random() * 10)}]

// Initialized the starting direction of snake head
let direction = "right";

for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
    const block = document.createElement('div'); //nested loop creates block
    block.classList.add('block'); 
    board.appendChild(block); //blocks are append in the board
    // block.innerText = `${row}-${col}`; 
    blocks[`${row}-${col}`] = block;
    }
}

// Rendered the game & core logic of game
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

    // WALL COLLISION LOGIC
    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >=cols){
        // alert("Game Over");
        clearInterval(intervalID);

        modal.style.display = "flex";
        startgameModal.style.display = "none";
        gameoverModal.style.display = "flex";
        return;
    }
    
    //consume food + snake length++ LOGIC
    if(head.x == food.x && head.y == food.y){
        blocks[`${food.x}-${food.y}`].classList.remove("food");

        food = {x:Math.floor(Math.random() * rows),y:Math.floor(Math.random() * cols)}
        snake.unshift(head)

        score += 10;
        scoreElement.innerText = score;
        if(score > highscore){
            highscore = score;
            localStorage.setItem("highscore", highscore.toString())
        }
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

// Game start button logic
startButton.addEventListener("click", () =>{
    modal.style.display= "none";
    intervalID = setInterval(() => { render()},300);
    timerIntervalId = setInterval(() => {
        let [min,sec] = time.split("-").map(Number)

        if(sec == 59) {
            min += 1
            sec = 0
        }else{
            sec += 1
        }

        time = `${min}-${sec}`
        timeElement.innerText = time;
    },1000)
})

// Game restart logic
restartButton.addEventListener("click", restartgame);

function restartgame(){
        highscoreElement.innerText = highscore;
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        snake.forEach(segment=>{
            blocks[`${segment.x}-${segment.y}`].classList.remove('fill')});
        
        modal.style.display= "none";
        snake =[{x:Math.floor(Math.random() * 10 ),y:Math.floor(Math.random() * 10)}]
        food = {x:Math.floor(Math.random() * rows),y:Math.floor(Math.random() * cols)}
        intervalID = setInterval(() => {render()},300);

        score = 0
        time='00-00'

         scoreElement.innerText = score;
         timeElement.innerText = time;

    }

  
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