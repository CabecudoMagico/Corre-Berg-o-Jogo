var correberg
var correbergimg

var pistadoberg
var pistadobergimg

var parede
var parede2
function preload(){
  pistadobergimg = loadImage("path.png");
  correbergimg = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  
  pistadoberg = createSprite(200,200);
  pistadoberg.addImage(pistadobergimg);
pistadoberg.scale = 1.2;
pistadoberg.velocityY = 2;
  correberg = createSprite(180,340.30,30);
  correberg.addAnimation("correndo",correbergimg);
  correberg.scale = 0.08;
  parede = createSprite(0,0,100,800);
  parede.visible = false;
  parede2 = createSprite(410,0,100,800);
  parede2.visible = false;
}

function draw() {
  background(0);
  correberg.x = World.mouseX
  if (pistadoberg.y > 400){
    pistadoberg.y = height / 2;
  }
  correberg.collide(parede);
  correberg.collide(parede2);
  drawSprites();
  
}
