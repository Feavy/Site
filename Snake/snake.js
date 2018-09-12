(function(){

var canvas = document.getElementById("canvas");

if(!canvas){
	alert("Erreur : canvas non trouvé !");
	return;
}

var g = canvas.getContext("2d");
if(!g){
	alert("Erreur : contexte non trouvé !");
	return;
}

window.onresize = function(){
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
};

class Snake{
	constructor() {
		this.isGrowing = false;
		this.offset = 0;
		this.newDirection = 39;
		this.parts = [[0, 0, 39]];
	}
	get x(){
		return this.parts[0][0];
	}
	get y(){
		return this.parts[0][1];
	}
	get size(){
		return this.parts.length;
	}
	draw(g){
		for(var [x, y, d] of this.parts)
			if(isVertical(d))
				g.fillRect(x * 30,  y * 30 + this.offset * ((d == 38)?-1:1), 30, 30);
			else
				g.fillRect(x * 30 + this.offset * ((d == 37)?-1:1),  y * 30, 30, 30);
	}
	grow(){
		this.isGrowing = true;
	}
	move(){
		this.offset+=2;
		if(this.offset < 0)return;
		this.offset = -30;

		var head = this.parts[0];
		var [x, y, d] = head;
		if(Math.abs(this.newDirection-d) != 2)
			d = this.newDirection;		

		this.parts.unshift([x, y, d]); // On duplique sa tête
		if(!this.isGrowing){
			this.parts.pop(); // On supprime sa queue
		}else{
			this.isGrowing = false;
		}

		this.parts[0][0] += (this.parts[0][2] == 39) ? 1 : (this.parts[0][2] == 37) ? -1 : 0;
		this.parts[0][1] += (this.parts[0][2] == 40) ? 1 : (this.parts[0][2] == 38) ? -1 : 0;

		var parts = this.parts;

		var isOverlapping = this.parts.slice(1).some(function(elem){
			if(parts[0][0] == elem[0] && parts[0][1] == elem[1])
				return true;
			return false;
		});
		if(isOverlapping)
			gameOver();
	}
}

window.onresize();

var isGameOver = false;

var snake = new Snake();

var apple = {x: 0, y: 0};
generateApple();

window.onkeydown = onKeyPress;
setInterval(paint, 1000/60)

function paint(){
	g.clearRect(0, 0, canvas.width, canvas.height);
	if(isGameOver){
		g.font = "50px sans-serif";
		var txt = "Partie terminée. Score : "+(snake.size-1);
		g.fillText(txt, (canvas.width-g.measureText(txt).width)/2, canvas.height/2);
		return;
	}
	(function drawApple(){
		g.fillStyle = "#ff0000";
		g.beginPath();
		g.arc(apple.x*30+15, apple.y*30+14, 10, 0, Math.PI*2);
		g.fill();
		g.closePath();
	})();
	g.fillStyle = "#607D8B";
	snake.draw(g);
	snake.move();
	g.fillText("Score : "+(snake.size-1), 10, 10);
	if(snake.x == apple.x && snake.y == apple.y){
		snake.grow();
		generateApple();
	}
}

function onKeyPress(e){
	if(e.keyCode >= 37 && e.keyCode <= 40)
		snake.newDirection = e.keyCode;
}

function generateApple(){
	var maxX = Math.floor(canvas.width / 30);
	var maxY = Math.floor(canvas.height / 30);
	apple.x = Math.floor(Math.random()*maxX);
	apple.y = Math.floor(Math.random()*maxY);
}

function isVertical(direction){
	return (direction == 37 || direction == 39) ? false : true;
}

function gameOver() {
	isGameOver = true;
}

})();