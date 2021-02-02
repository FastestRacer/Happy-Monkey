var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey= createSprite(200,200,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale= 0.10;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX= -4;
  
  obstacleGroup= createGroup();
  foodGroup= createGroup();
}

function draw() {
  background(220);
   
  if (keyDown("space") && monkey.y >= 314.3){
    monkey.velocityY= -12;
  }
  
  monkey.velocityY= monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  ground.x= ground.width/2;
  
  fruits();
  rock();
  
  var surivalTime= 0
  stroke("black");
  textSize(15);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,150,50)
  
  
  drawSprites();
}

function fruits() {
  
  if (frameCount % 60 === 0){
    banana= createSprite(350,200,10,50);
    banana.y= Math.round(random(170,250));
    banana.addImage(bananaImage);
    banana.scale= 0.10;
    banana.velocityX= -4;
    foodGroup.add(banana);
  }
}

function rock(){
  
  if (frameCount % 300 === 0){
    obstacle= createSprite(400,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.10;
    obstacle.velocityX= -4;
  }
}

