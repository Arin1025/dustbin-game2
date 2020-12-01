
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImage, dustbinImage;

function preload(){
paperImage=loadImage("paper.png");
dustbinImage=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1=new Ball(100, 600, 70);
	stick1=new Sticks(300, 500, 200, 10);
	stick2=new Sticks(305, 600, 10, 200);
  stick3=new Sticks(405, 500, 200, 10);
  ground1=new Ground(610, 400, 10, 800);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
  ball1.display();
  stick1.display();
  stick2.display();
  stick3.display();
  ground1.display();
}
function keyPressed(){
 if(keyCode===UP_ARROW){
Matter.Body.appleForce(paperObject.body,paperObject.body.position,{x:85, y:-85})
 }	
}