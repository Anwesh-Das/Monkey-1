var monkey , monkey_running
var banana ,bananaImage;
var bananaGroup;
var obstacle, obstacleImage;
var foodGroup;
var obstacleGroup;
var ground,groundImage;
var score = 0;
var survivaltime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {

  background("white");
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate());
  text("survival time: "+survivaltime,100,50);
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  
  if (frameCount % 80 === 0){
    var banana = createSprite(600,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage("moving",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 600;
    bananaGroup.add(banana);
  }
  }

function obstacles(){
  
  if (frameCount % 300 === 0){
    var obstacle = createSprite(300,320,20,20);
    obstacle.addImage("moving",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
  }
  }