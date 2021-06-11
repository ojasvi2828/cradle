
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 roof = new Roof();
bob1 = new Bob(320,600,40);
rope1= new Rope(bob1.body,roof.body,-80,0);
bob2 = new Bob(360,600,40);
rope2= new Rope(bob2.body,roof.body,-40,0);
bob3 = new Bob(400,600,40);
rope3= new Rope(bob3.body,roof.body,0,0);
bob4 = new Bob(440,600,40);
rope4= new Rope(bob4.body,roof.body,40,0);
bob5 = new Bob(480,600,40);
rope5= new Rope(bob5.body,roof.body,80,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-40});
  }
}

