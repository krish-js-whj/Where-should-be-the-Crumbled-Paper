
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;	
var world,keyHasBeenPressed = 0;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width*5,20);
	dustbinObj=new dustbin(1200,650);
	paperObject= new Paper(350,600,100);
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(230);

  	groundObject.display();
  	dustbinObj.display();
	paperObject.display();
	keyPressed()
	textSize(20)
	text("x: "+(Math.round(paperObject.body.position.x/10)*10)+", y: "+(Math.round(paperObject.body.position.y*10)/10),0,30)
	function keyPressed(){
	if (keyWentDown("up")){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:80,y:-250})
		keyHasBeenPressed=1
	}if (keyWentDown("down")){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:-80,y:-250})
		keyHasBeenPressed=1
	}
	
if (keyHasBeenPressed==1){
 	if ((paperObject.body.position.x<1100 || paperObject.body.position.x>1300)&&(paperObject.body.position.y>630.14)){
	textSize(50)
	text("The litter needs to be inside the bin.",350,300);
	 }
	 if ((paperObject.body.position.x>1100 && paperObject.body.position.x<1300) && (paperObject.body.position.y>610)){
		textSize(75);
		text("KEEP IT UP!",450,300);
		}
		}
}
}
