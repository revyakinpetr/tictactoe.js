;
'use strict';

(new function() {
    var App = this;
    this.files = ['js/Grid.js'];

    this.init = function() {
        this.grid = new Grid(10);
        this.grid.render();
        this.grid.renderMove("X", {"x": 3, "y": 0});
        this.grid.renderMove("0", {"x": 9, "y": 0});
    };

    return function() {
        var head = document.getElementsByTagName('head')[0];
        for (var i in App.files) {
            var script = document.createElement('script');
            script.src = App.files[i];
            script.onload = App.start;
            head.appendChild(script);
        }

        window.onload = App.init;
    };
})();

// var gameBoard = document.querySelector(".gameBoard");

// var scoreBoard = document.querySelector(".scoreBoard");

// gameBoard.style.height = gameBoard.style.width = (document.body.clientHeight - scoreBoard.clientHeight - 60) + "px";

// var canvas = document.createElement('canvas');
// canvas.setAttribute("height", gameBoard.clientHeight);
// canvas.setAttribute("width", gameBoard.clientWidth);
// canvas.style.cursor = "pointer";
// gameBoard.appendChild(canvas);

// function renderGrid() {
// 	c = document.querySelector("canvas");
// 	let height = c.clientHeight;
// 	let cellCount = 5;

// 	ctx = c.getContext("2d");
// 	ctx.beginPath();

// 	for (let i = 0; i<=cellCount; i++) {
// 		ctx.moveTo(0, i*height/cellCount);
// 		ctx.lineTo(height, i*height/cellCount);
// 	}

// 	for (let i = 0; i<=cellCount; i++) {
// 		ctx.moveTo(i*height/cellCount, 0);
// 		ctx.lineTo(i*height/cellCount, height);
// 	}

// 	ctx.stroke();
// }

// renderGrid()

