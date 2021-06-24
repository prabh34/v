const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var snow = [];

function preload() {
  backgroundImg = loadImage("snow1.jpg");

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
}

function draw() {
  background(backgroundImg);
  
  if (frameCount%50 === 0) {
    snow.push(new Snow(random(width/2-30,width/2+30),10,10));
  }
  for (var s=0; s<snow.length; s++) {
    snow[s].display()
  }

  drawSprites();
}