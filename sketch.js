
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var tree,treeImg,boy,boyImg,stone,ground; 
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;


function preload(){
 treeImg=loadImage("tree.png");
 boyImg=loadImage("boy.png");
} 

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(); 
	stone=new Stone();
	mango1=new Mango();
	mang02=new Mango();
	mango3=new Mango();
	mango4=new Mango();
	mango5=new Mango();
	mango6=new Mango();
	mango7=new Mango();
	mango8=new Mango();
	mango9=new Mango();
	mango10=new Mango();

	attach=new throw(stone.body,{x:,y:});

	tree=createSprite();
	tree.addImage();
	tree.scale=;

	boy=createSprite();
	boy.addImage();
	boy.scale=;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  fill(0);
  textSize(18);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();
  
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    attach.fly();
}

function detectCollision(istone,imango){
	mangoBodyPosition=imangoBodyPosition
	stoneBodyPosition=istoneBodyPosition
	
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
 if(distance<=imango.r+istone.r){
	 Matter.Body.setStatic(imango.body,false);
 }
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:,y:})
		attach.Launch(stone.body);
	}
}
