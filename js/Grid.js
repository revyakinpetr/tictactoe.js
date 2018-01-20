; 
'use strict';

function Grid(cellCount) {
    var gameBoard = document.querySelector(".gameBoard");
    var scoreBoard = document.querySelector(".scoreBoard");
    this.canvas = document.createElement('canvas');

    // make it square!
    gameBoard.style.height = gameBoard.style.width = (document.body.clientHeight - scoreBoard.clientHeight - 60) + "px";

    this.canvas.setAttribute("height", gameBoard.clientHeight);
    this.canvas.setAttribute("width", gameBoard.clientWidth);
    this.canvas.style.cursor = "pointer";
    gameBoard.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
    this.cellCount = cellCount;
}

Grid.prototype.render = function() {
    this.ctx.beginPath();

    for (let i = 0; i<=this.cellCount; i++) {
        this.ctx.moveTo(0, i*this.canvas.clientHeight/this.cellCount);
        this.ctx.lineTo(this.canvas.clientHeight, i*this.canvas.clientHeight/this.cellCount);
    }

    for (let i = 0; i<=this.cellCount; i++) {
        this.ctx.moveTo(i*this.canvas.clientHeight/this.cellCount, 0);
        this.ctx.lineTo(i*this.canvas.clientHeight/this.cellCount, this.canvas.clientHeight);
    }

    this.ctx.stroke();
};

Grid.prototype.renderMove = function(role, coords) {

    cellSize = this.canvas.clientHeight/this.cellCount;
    y = coords.y*cellSize + cellSize/2;
    x = coords.x*cellSize + cellSize/2;
    r = cellSize/2 - 0.1*cellSize;

    switch (role) {
        case 2:
        case "0":
            this.ctx.beginPath();
            this.ctx.arc(x,y,r,0,2*Math.PI);
            this.ctx.stroke();
            break;

        case 1:
        case "X":
            padding = 0.1*cellSize;
            this.ctx.beginPath();
            this.ctx.moveTo(x-r+padding, y-r+padding);
            this.ctx.lineTo(x+r-padding, y+r-padding);
            this.ctx.moveTo(x+r-padding, y-r+padding);
            this.ctx.lineTo(x-r+padding, y+r-padding);
            // this.ctx.arc(x,y,r,0,2*Math.PI);
            this.ctx.stroke();
            break;

    }
};

Grid.prototype.renderWinLine = function(startCoords, finishCoords) {
    
};