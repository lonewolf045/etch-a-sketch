const modes = { black : "BLACK" , super : "SUPER"};

const canvas = document.getElementsByClassName('canvas')[0];
//console.log(container);
let count = 16;
let mode = modes.black;

//console.log(container.clientHeight);
//console.log(container);
let size = canvas.clientHeight / count;
canvas.getElementsByClassName.cssText = `width : ${canvas.clientHeight}`;

const modeToBlack = () => {
    mode = modes.black;
}

const modeToSuper = () => {
    mode = modes.super;
}

const newGrid = () => {
    count = parseInt(window.prompt("Size Of the Grid ?", "16"));
    if(count < 1 || Number.isNaN(count)) {
        count = 1;
    }
    clearGrid(canvas);
    size = canvas.clientHeight / count;
    drawGrid(canvas,count,size);
}

const change = (t) => {
    if(mode === modes.black) {
        t.target.style.cssText = 'background-color : black';
    }
}