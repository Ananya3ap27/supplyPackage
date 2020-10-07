var helicopterIMG, helicopterSprite, packageSprite,packageIMG,options;
var packageBody,ground,gameState="static",posState="not";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    options={
		isStatic:true
	}
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  if(posState==="yes"){
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y   
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("space")&&gameState==="static") {
	packageSprite=createSprite(helicopterSprite.x, helicopterSprite.y, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.rectangle(helicopterSprite.x, helicopterSprite.y , 3 ,2,{restitution:1.3});
	World.add(world, packageBody);
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	gameState="fall";
	posState="yes";
  }
}



