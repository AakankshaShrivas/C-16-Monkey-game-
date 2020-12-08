
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background("white");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+1;
  
  monkey.collide(ground);
  food();
  spawnobstacle();
  
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    monkey.velocityY=0;
    ground.velocityY=0;
  }
  
  
  
  
  
}
function food(){
  if(frameCount%80===0){
banana=createSprite(600,250,10,10);
banana.velocityX=-9;
banana.y=Math.round(random(120,250))   
banana.addImage(bananaImage);
banana.scale=0.1;
monkey.depth=banana.depth;
monkey.depth=monkey.depth+1;
    
banana.lifetime=100;
FoodGroup.add(banana);
  }
}

function spawnobstacle(){
  if(frameCount%200===0){
obstacle=createSprite(800,316,10,10);
obstacle.velocityX=-8;
    
obstacle.addImage(obstacleImage);
obstacle.scale=0.15;
    
obstacle.lifetime=200;
obstacleGroup.add(obstacle);
  }
}




