var trex;
var trex_running;
var ground; 
var groundImage; 
var invibleGround; 

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png"); 
  groundImage = loadImage("ground2.png"); 
}

function setup(){
  createCanvas(600,400);
  
  //crear sprite de Trex
  trex = createSprite(50, 200, 50, 20); 
  trex.addAnimation("running", trex_running); 
  trex.scale = 0.5; 
  
  ground = createSprite(300, 250, 500, 10); 
  ground.addImage("suelo", groundImage); 
  ground.velocityX = -4; 

  invibleGround = createSprite(100, 260, 500, 10); 
  invibleGround.visible = false; 

}

function draw(){
  background("white"); 
 
  if(keyDown("space") && trex.y >= 100){
    trex.velocityY = -10; 
  }

  trex.velocityY = trex.velocityY + 0.8; 

  if(ground.x < 0){
    ground.x = ground.width/2;     
  }

  trex.collide(invibleGround); 
  
  drawSprites(); 
}
