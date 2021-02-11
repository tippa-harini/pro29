const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  polygon_img=loadImage("polygon.png");
	
}

var ground;
var stand1,stand2;
var slingshot;
var polygon;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(600,650,1200,10);
	stand1=new Ground(500,400,250,10)

  polygon=Bodies.circle(100,200,20);
  World.add(world,polygon);

  slingshot=new SlingShot(this.polygon,{x:100,y:200})

  block1 = new Block(400,375,30,40);
  block2 = new Block(430,375,30,40);
  block3 = new Block(460,375,30,40);
  block4 = new Block(490,375,30,40);
  block5 = new Block(520,375,30,40);
  block6 = new Block(550,375,30,40);
  block7 = new Block(580,375,30,40);
  block8 = new Block(430,335,30,40);
  block9 = new Block(460,335,30,40);
  block10 = new Block(490,335,30,40);
  block11 = new Block(520,335,30,40);
  block12 = new Block(550,335,30,40);
  block13 = new Block(460,295,30,40);
  block14 = new Block(490,295,30,40);
  block15 = new Block(520,295,30,40);
  block16 = new Block(490,255,30,40);

  stand2=new Ground(900,300,200,10);
  block17 = new Block(840,275,30,40);
  block18 = new Block(870,275,30,40);
  block19 = new Block(900,275,30,40);
  block20 = new Block(930,275,30,40);
  block21 = new Block(960,275,30,40);
  block22 = new Block(870,235,30,40);
  block23 = new Block(900,235,30,40);
  block24 = new Block(930,235,30,40);
  block25 = new Block(900,195,30,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  stand1.display();
  strokeWeight(2)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  stand2.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  slingshot.display();
 
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);


  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 slingshot.fly();
}
