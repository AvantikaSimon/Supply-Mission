const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, helicopter, helicopter2, package, ground1, dropZone1, dropZone2, dropZone3

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  package = Bodies.rectangle(200, 75, 15, 20);
  

World.add(world, package);

  helicopter_options = {
    isStatic:true
  }
  helicopter = Bodies.rectangle(200, 70, 150, 20, helicopter_options);

World.add(world, helicopter); 

  fill("blue");
  
  var dropZone1_options = {
    isStatic:true
  }

  dropZone1 = Bodies.rectangle(200, 380, 100, 10, dropZone1_options);
  World.add(world, dropZone1);

  var dropZone2_options = {
    isStatic:true
  }
  
  dropZone2 = Bodies.rectangle(150, 399, 10, 50, dropZone2_options);
  World.add(world, dropZone2)

  var dropZone3_options = {
    isStatic:true
  }

  fill("red");

  dropZone3 = Bodies.rectangle(250, 399, 10, 50, dropZone3_options);
  World.add(world, dropZone3)

  ground1 = new ground(200, 390, 400, 10)

}

function draw() {
  background("white");
  Engine.update(engine);

  rectMode(CENTER);
  rect(package.position.x, package.position.y, 25, 30);

  rectMode(CENTER);
  rect(helicopter.position.x, helicopter.position.y, 150, 20);

  rectMode(CENTER);
  rect(dropZone1.position.x, dropZone1.position.y, 100, 10);

  rectMode(CENTER);
  rect(dropZone2.position.x, dropZone2.position.y, 10, 50);

  rectMode(CENTER);
  rect(dropZone3.position.x, dropZone3.position.y, 10, 50);
  
  if(package.y > 350) {
    text("Package dropped successfully", 200, 200);
    
  }

  drawSprites();
}