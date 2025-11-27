const board = document.querySelector('.board');
const blockWidth = 50;
const blockHeight = 50;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

const blocks = [];
const snake = [{
    x:1,
    y: 3
},{
    x:1,
    y:4
},{
    x:1,
    y:5
}];
for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
    const block = document.createElement('div');
    block.classList.add('block'); 
    board.appendChild(block);
    block.innerText = `${row}-${col}`;
    // block.innerText = row+ '-' +col;
    blocks[`${row}-${col}`] = block;
    }
}


function render(){

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add('fil');
    })
}

setInterval(()=>{
    render()
},300);