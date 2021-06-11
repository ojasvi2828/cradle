
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
bob1 = new Bob(400,600,40);
rope1= new Rope(bob1.body,roof.body,0,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  rope1.display();
  bob1.display();
  drawSprites();
 
}



