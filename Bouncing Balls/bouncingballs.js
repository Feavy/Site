(function(){

var canvas = document.getElementById("canvas");
if(!canvas){
	alert("Canvas non trouvé !")
	return;
}

var g = canvas.getContext("2d");
if(!g){
	alert("Contexte 2d non trouvé !")
	return;
}

class Ball{
	constructor(x, y, velocity){
		this.x = x;
		this.y = y;
		this.xVelocity = velocity;
		this.yVelocity = 1-velocity;
		this.radius = 10;
		this.moveCount = 0;
		this.lastPos = [];
		for(var i = 0; i < 5; i++)
			this.lastPos.push([this.x, this.y]);
	}
	draw(g){
		g.beginPath();
		let color = 0x000000;
		g.fillStyle = "#000000";
		g.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		g.closePath();
		g.fill();
		for(var [x, y] of this.lastPos){
			g.beginPath();
			color += 0x111111;
			g.fillStyle = "#"+color.toString(16);
			g.arc(x, y, this.radius, 0, Math.PI*2);
			g.closePath();
			g.fill();
		}
	}
	move(){

		this.moveCount++;
		if(this.moveCount > 2){
			this.moveCount = 0;
			this.lastPos.unshift([this.x, this.y]);
			this.lastPos.pop();
		}

		this.x += this.xVelocity*3;
		this.y += this.yVelocity*3;

		if(this.x-this.radius <= 0 || this.x+this.radius >= canvas.width){
			this.xVelocity *= -1;
		}
		if(this.y-this.radius <= 0 || this.y+this.radius >= canvas.height){
			this.yVelocity *= -1;
		}
	}
}

window.onresize = function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

window.onresize();

var balls = [];
for(var i = 0, x, y, velocity, angle; i < 10; i++){
	x = Math.random()*canvas.width;
	y = Math.random()*canvas.height;
	velocity = Math.random();
	balls[i] = new Ball(x, y, velocity);
}

setInterval(paint, 1000/60);

function paint(){
	g.clearRect(0, 0, canvas.width, canvas.height);
	for(var ball of balls){
		ball.draw(g);
		ball.move();
	}
}

})();