var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	rect1Sprite=createSprite(400,650,200,20);
	rect1Sprite.shapeColor="white";
	
    rect1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,rect1);

	rect2Sprite=createSprite(300,610,20,100);
	rect2Sprite.shapeColor="white";

	rect2 = Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world,rect2);

	rect3Sprite=createSprite(500,610,20,100);
 rect3Sprite.shapeColor="white";

	rect3 = Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,rect3);

	ground = new Ground(400,680,800,20);
	paper = new Paper(100,678);
	
	
 	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	
  
}


function draw() {
	Engine.update(engine);
  
  background(0);
  ground.display();
  paper.display();
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

}



}







