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
};

const modeToSuper = () => {
    mode = modes.super;
};

const newGrid = () => {
    count = parseInt(window.prompt("Size Of the Grid ?", "16"));
    if(count < 1 || Number.isNaN(count)) {
        count = 1;
    }
    clear(canvas);
    size = canvas.clientHeight / count;
    grid(canvas,count,size);
};

const change = (t) => {
    if(mode === modes.black) {
        t.target.classList.add('black');
    } else {
        let red = Math.round(Math.random() * 255) + 1;
        let blue = Math.round(Math.random() * 255) + 1;
        let green = Math.round(Math.random() * 255) + 1;
        let color = `background-color: rgb(${red},${blue},${green})`;
        t.target.style.cssText += color;
    }
};

const clear = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
};

const grid = (parent , count , size) => {
    let idNum = 1;
    for(let i = 1; i <= count ; i++) {
        const row = document.createElement('div');
        for(let j = 1; j <= count ; j++) {
            const column = document.createElement('div');
            column.id = idNum;
            idNum++;
            column.addEventListener("mouseenter",change);
            column.classList.add('column');
            column.style.cssText = ` width : ${size}px; height : ${size}px;`;
            row.appendChild(column);
        }
        row.classList.add('row');
        parent.appendChild(row);
    }
};

grid(canvas , count , size);
