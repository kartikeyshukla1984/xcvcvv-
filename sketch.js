
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;

var myEngine, myWorld;


function setup() {
	createCanvas(1200, 1000);


	myEngine = Engine.create();
  myWorld = myEngine.world;

	//Create the Bodies Here.
	ground = new Ground(600,30,1200,20);
	b1 = new Bob(10,400,100);
  b2 = new Bob(30,400,100);
  b3 = new Bob(60,400,100);
  b4 = new Bob(90,400,100);
  b5 = new Bob(120,400,100);
 
    r1 =  new Rope(b1.body,ground.body,50,0);
    r2 =  new Rope(b2.body,ground.body,100,0);
    r3 =  new Rope(b3.body,ground.body,150,0);
    r4 =  new Rope(b4.body,ground.body,200,0);
    r5 =  new Rope(b5.body,ground.body,250,0);

    

  
}


function draw() {
  
  background("green");
  
  Engine.update(myEngine);

  ground.display();
  b1.display();
  r1.display();
  b2.display();
  r2.display();
  b3.display();
  r3.display();
  b4.display();
  r4.display();
  b5.display();
  r5.display();
  
  
 
}



