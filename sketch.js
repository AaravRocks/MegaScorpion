var bomb
var coin
var energyDrink
var pathImg
var power
var run1
var run2

function preload(){
  //pre-load images
  bomb=loadImage("bomb.png")
  coin=loadImage("coin.png")
  drink=loadImage("energyDrink.png")
  pathImg=loadImage("path.png")
  power=loadImage("power.png")
  run1=loadImage("Runner-1.png")
  run2=loadImage("Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(195,400,210)
  path.addImage(pathImg)
  path.velocityY=5  
  
  runner=createSprite(300,300)
  runner.addImage(run1,run2)
  runner.scale=0.075
   

  left=createSprite(0,0,100,800)
  left.visible=false

  right=createSprite(410,0,100,800)
  right.visible=false
}

function draw() {
  background(0);
  if(path.y>=400){
    path.y=height/2
  }

  runner.x=World.mouseX

  if(keyIsDown(RIGHT_ARROW)){
    runner.velocityX=runner.velocityX+5
  }
  if(keyIsDown(LEFT_ARROW)){
    runner.velocityX=runner.velocityX-5
  }
  
  edges=createEdgeSprites();
  runner.collide(edges[3])
  runner.collide(left)
  runner.collide(right)
  drawSprites()
}
